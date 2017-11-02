import {ModuleWithProviders, NgModule} from '@angular/core';
import {TreeViewComponent} from './tree-view.component';
import {TreeViewNodeComponent} from './node/tree-view-node.component';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TreeViewConfig} from './tree-view-config';
import {TreeViewHeaderComponent} from './header/tree-view-header.component';

export {TreeViewNodeModel} from './model/tree-view-node.model';
export {TreeViewNode} from './model/tree-view-node-default-model';
export {TreeViewConfig} from './tree-view-config';

@NgModule({
    declarations: [TreeViewNodeComponent, TreeViewHeaderComponent, TreeViewComponent],
    imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
    exports: [TreeViewNodeComponent, TreeViewHeaderComponent, TreeViewComponent]
})
export class TreeViewModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: TreeViewModule,
      providers: [
        TreeViewConfig
      ]
    };
  }
}


