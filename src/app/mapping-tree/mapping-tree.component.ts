import {FlatTreeControl} from '@angular/cdk/tree';
import {Component, Input, Output, EventEmitter} from '@angular/core';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import {DataNode, DataFlatNode} from '../models/data.model';

@Component({
  selector: 'app-mapping-tree',
  templateUrl: './mapping-tree.component.html',
  styleUrls: ['./mapping-tree.component.scss']
})
export class MappingTreeComponent {
  @Input() data: DataNode[];
  @Input() isSelected: Function;
  @Input() isMapped: Function;
  @Output() onChange = new EventEmitter<DataFlatNode[]>();

  private _transformer = (node: DataNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
      dataNode: node
    };
  }

  treeControl = new FlatTreeControl<DataFlatNode>(
      node => node.level, node => node.expandable);

  treeFlattener = new MatTreeFlattener(
      this._transformer, node => node.level, node => node.expandable, node => node.children);

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  ngOnChanges() {
    console.log(this.data);
    if (this.data) {
      this.dataSource.data = this.data;
    }
  }

  hasChild = (_: number, node: DataFlatNode) => node.expandable;

  unselect() {
    this.treeControl.dataNodes.forEach(node => node.dataNode.selected = false);
  }

  toggle(node) {
    if (this.isMapped(node.dataNode)) {
      return;
    }
    this.unselect();
    node.dataNode.selected = !node.dataNode.selected;
    this.onChange.emit(this.treeControl.dataNodes);
  }
}
