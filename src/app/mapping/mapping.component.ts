import { Component, OnInit, ViewChild } from '@angular/core';
import {DataNode, DataFlatNode, Mapping} from '../models/data.model';

@Component({
  selector: 'app-mapping',
  templateUrl: './mapping.component.html',
  styleUrls: ['./mapping.component.scss']
})
export class MappingComponent implements OnInit {
  @ViewChild('sourceTreeComponent', {static: false}) sourceTreeComponent;
  @ViewChild('targetTreeComponent', {static: false}) targetTreeComponent;

  sourceTree: DataNode[] = [
    {
      name: 'Fruit',
      children: [
        {name: 'Apple'},
        {name: 'Banana'},
        {name: 'Fruit loops'},
      ]
    }, {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [
            {name: 'Broccoli'},
            {name: 'Brussel sprouts'},
          ]
        }, {
          name: 'Orange',
          children: [
            {name: 'Pumpkins'},
            {name: 'Carrots'},
          ]
        },
      ]
    },
  ];

  targetTree: DataNode[] = [
    {
      name: 'Fruit',
      children: [
        {name: 'Apple'},
        {name: 'Banana'},
        {name: 'Fruit loops'},
      ]
    }, {
      name: 'Vegetables',
      children: [
        {
          name: 'Green',
          children: [
            {name: 'Broccoli'},
            {name: 'Brussel sprouts'},
          ]
        }, {
          name: 'Orange',
          children: [
            {name: 'Pumpkins'},
            {name: 'Carrots'},
          ]
        },
      ]
    },
  ];

  mappings: Mapping[] = [];
  sourceNode: DataNode;
  targetNode: DataNode;

  selectedMapping: Mapping;

  constructor() { }

  ngOnInit() {
  }

  getSelected(nodes: DataFlatNode[]): DataNode {
    let found = nodes.find(node => node.dataNode.selected);
    if (found) {
      return found.dataNode;
    }
  }

  sourceTreeChanged(nodes: DataFlatNode[]) {
    this.sourceNode = this.getSelected(nodes);
  }

  isSelectedSource = (node: DataNode) => {
    if (this.selectedMapping) {
      return this.selectedMapping.source === node;
    }
  }

  isSelectedTarget = (node: DataNode) => {
    if (this.selectedMapping) {
      return this.selectedMapping.target === node;
    }
  }

  isMappedSource = (node: DataNode) => {
    return !!this.mappings.find(n => n.source === node)
  }

  isMappedTarget = (node: DataNode) => {
    return !!this.mappings.find(n => n.target === node)
  }

  targetTreeChanged(nodes: DataFlatNode[]) {
    this.targetNode = this.getSelected(nodes);
  }

  addMapping() {
    this.mappings.push({
      source: this.sourceNode,
      target: this.targetNode,
    });
    this.sourceTreeComponent.unselect();
    this.targetTreeComponent.unselect();
    this.sourceNode = null;
    this.targetNode = null;
  }

  toggleMapping(mapping: Mapping) {
    if (this.selectedMapping == mapping) {
      this.selectedMapping = null;
    } else {
      this.selectedMapping = mapping;
    }
  }

  deleteMapping() {
    let index = this.mappings.indexOf(this.selectedMapping);
    if (index !== -1) {
      this.mappings.splice(index, 1);
      this.selectedMapping = null;
    }
  }

}
