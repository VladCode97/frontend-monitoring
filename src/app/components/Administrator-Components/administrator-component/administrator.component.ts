import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import FoodNode from 'src/app/Interfaces/Tree_Interface';
import { MatTreeNestedDataSource } from '@angular/material';
import handlerTree from 'src/app/Handlers/Handler_TreeMenu';
import { AuthService } from 'src/app/Services/Auth-Service/auth-service.service';

@Component({
  selector: 'app-administrator-component',
  templateUrl: './administrator.component.html',
  styleUrls: ['./administrator.component.css']
})
export class AdministratorComponent implements OnInit {

  public treeControlClients;
  public treeControlUsers;
  public dataSourceClients;
  public dataSourceUsers;

  constructor(private authService: AuthService) {
    this.treeControlClients = new NestedTreeControl<FoodNode>(node => node.children);
    this.treeControlUsers = new NestedTreeControl<FoodNode>(node => node.children);
    this.dataSourceClients = new MatTreeNestedDataSource<FoodNode>();
    this.dataSourceUsers = new MatTreeNestedDataSource<FoodNode>()
    this.dataSourceClients.data = handlerTree.treeDataClients;
    this.dataSourceUsers.data = handlerTree.treeDataUser;
  }

  ngOnInit() {
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  signOut() {
    this.authService.signOut();
  }

}
