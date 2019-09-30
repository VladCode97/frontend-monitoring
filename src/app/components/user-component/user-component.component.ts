import { Component, OnInit } from '@angular/core';
import { NestedTreeControl } from '@angular/cdk/tree';
import FoodNode from 'src/app/Interfaces/Tree_Interface';
import { MatTreeNestedDataSource } from '@angular/material';
import handlerTree from 'src/app/Handlers/Handler_TreeMenu';
import { AuthService } from 'src/app/Services/Auth-Service/auth-service.service';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.css']
})
export class UserComponent implements OnInit {

  public dataSourceUsers;
  public treeControlUsers;

  constructor(private authService: AuthService) {
    this.treeControlUsers = new NestedTreeControl<FoodNode>(node => node.children);
    this.dataSourceUsers = new MatTreeNestedDataSource<FoodNode>();
    this.dataSourceUsers.data = handlerTree.TREE_DATA_USER;
  }

  ngOnInit() {
  }

  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  signOut() {
    this.authService.signOut();
  }

}
