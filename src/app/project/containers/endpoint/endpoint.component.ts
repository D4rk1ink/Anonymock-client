import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { Store } from '@ngrx/store'
import { EndpointService } from 'app/project/services/endpoint.service';
import { MethodService } from 'app/project/services/method.service';
import { FolderService } from 'app/project/services/folder.service';
import * as endpointAction from 'app/project/actions/endpoint.action'
import * as fromProject from 'app/project/reducers'

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {

  public endpoint: any
  public responses: any[]
  public folders: any[]
  public methods: any[]

  constructor (
    private store: Store<any>,
    private endpointService: EndpointService,
    private methodService: MethodService,
    private folderService: FolderService,
    private route: ActivatedRoute
  ) {
    this.folders = []
    this.methods = []
    this.getFolders()
    this.getMethods()
    this.store.select(fromProject.getEndpoint)
      .subscribe(endpoint => {
        this.endpoint = endpoint
      })
    this.route.params.subscribe(params => {
      this.endpointService.getById(params['endpoint-id'])
        .subscribe(res => {
          if (!res.error) {
            this.store.dispatch(new endpointAction.IdAction(this.endpoint.id))
            this.store.dispatch(new endpointAction.NameAction(this.endpoint.name))
            this.store.dispatch(new endpointAction.PathAction(this.endpoint.path))
          }
        })
    })
    // Call service get endpoint
  }

  ngOnInit () {
  }

  onPathChange (path) {
    this.store.dispatch(new endpointAction.PathAction(path))
  }

  getFolders () {
    this.store.select(fromProject.getProjectId)
      .subscribe(projectId => {
        if (!projectId) return
        const payload = {
          project: projectId,
          search: '',
          all: true
        }
        this.folderService.search(payload)
          .subscribe(res => {
            if (!res.error) {
              this.folders = res.data.folders
            }
          })
      })
  }
  
  getMethods () {
    this.methodService.search()
      .subscribe(res => {
        if (!res.error) {
          this.methods = res.data
        }
      })
  }

}
