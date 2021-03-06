import {TreeViewNodeModel} from './tree-view-node.model';
import {Subject} from 'rxjs/Subject';

export interface TreeViewModel {

  /**
   * Set the nodes of the tree.
   * @param {TreeViewNodeModel[]} nodes
   * @returns {TreeViewModel}
   */
  withNodes(nodes: TreeViewNodeModel[]): TreeViewModel;

  /**
   * Get the nodes of the tree.
   * @returns {TreeViewNodeModel[]}
   */
  getNodes(): TreeViewNodeModel[];

  /**
   * Handler on expand tree click.
   */
  onExpandTree();

  /**
   * Handler on collapse tree click.
   */
  onCollapseTree();

  /**
   * Handler on filter input.
   * @param e
   */
  onFilterInput(e);

  /**
   * Foreach node of the tree applies the filter method implementation.
   * @param {string} filter
   */
  filterTree(term: string);

  /**
   * The number of the node of the tree.
   * @returns {number}
   */
  getSize(): number;

  /**
   * First rendered node of the tree.
   * @returns {TreeViewNodeModel}
   */
  getFirst(): TreeViewNodeModel;

  /**
   * Last rendered node of the tree.
   * @returns {TreeViewNodeModel}
   */
  getLast(): TreeViewNodeModel;

}
