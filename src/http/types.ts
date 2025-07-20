export type GetRoomsResponse = Array<{
  id: string;
  name: string;
  questionCount: number;
  createdAt: string;
}>;

export type CreateRoomRequest = {
  name: string;
  description: string;
};

export type CreateRoomResponse = {
  roomId: string;
};

export type CreateQuestionRequest = {
  question: string;
};
