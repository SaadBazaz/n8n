import type { EventBus } from 'n8n-design-system/utils';
import { createEventBus } from 'n8n-design-system/utils';
import type { IDataObject } from 'n8n-workflow';

export type CallbackFn = () => void;

export interface NodeViewEventBusEvents {
	/** Command to create a new workflow */
	newWorkflow: never;

	/** Command to open the chat */
	openChat: never;

	/** Command to save the current workflow */
	saveWorkflow: CallbackFn;

	/** Command to import a workflow from given data */
	importWorkflowData: IDataObject;

	/** Command to import a workflow from given URL */
	importWorkflowUrl: IDataObject;

	'runWorkflowButton:mouseenter': never;

	'runWorkflowButton:mouseleave': never;
}

export type NodeViewEventBus = EventBus<NodeViewEventBusEvents>;

export const nodeViewEventBus = createEventBus<NodeViewEventBusEvents>();
