export interface Employment {
  id?: number;
  jobId: number
  openingDate: Date;
  description: string;
  closingDate?: Date;
  status?: boolean;
}
