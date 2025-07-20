import { useMutation } from '@tanstack/react-query';
import type { CreateQuestionRequest } from './types';

export function useCreateQuestion(roomId: string) {
  return useMutation({
    mutationFn: async (data: CreateQuestionRequest) => {
      const response = await fetch('http://localhost:3333/questions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result: CreateQuestionRequest = await response.json();

      return result;
    },
  });
}
