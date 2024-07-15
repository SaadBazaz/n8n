import type { IRestApiContext } from '@/Interface';
import type { ChatRequest } from '@/types/assistant.types';
import { makeRestApiRequest } from '@/utils/apiUtils';

export async function chatWithAssistant(
	ctx: IRestApiContext,
	payload: ChatRequest.RequestPayload,
): Promise<ChatRequest.ResponsePayload> {
	return await makeRestApiRequest(ctx, 'POST', '/ai-proxy/chat', payload);
}

export async function replaceCode(
	ctx: IRestApiContext,
	payload: ChatRequest.RequestPayload,
): Promise<ChatRequest.ResponsePayload> {
	return await makeRestApiRequest(ctx, 'POST', '/ai-proxy/apply-code-diff', payload);
}
