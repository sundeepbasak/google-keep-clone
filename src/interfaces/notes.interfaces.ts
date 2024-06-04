export interface INote {
    id: string;
    title: string;
    text: string;
    isCompleted: boolean;
    isArchived: boolean;
    isTrashed: boolean;
    isPinned: boolean;
    bgColor: string;
    image: string;
}