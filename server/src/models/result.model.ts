import {Entity, model, property} from '@loopback/repository';

@model()
export class Result extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
  })
  student_name?: string;

  @property({
    type: 'number',
    required: true,
  })
  total: number;

  @property({
    type: 'number',
    required: true,
  })
  test_id: number;

  @property({
    type: 'string',
    required: true,
  })
  completedAt: string;

  constructor(data?: Partial<Result>) {
    super(data);
  }
}

export interface ResultRelations {
  // describe navigational properties here
}

export type ResultWithRelations = Result & ResultRelations;
