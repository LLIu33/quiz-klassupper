import {Test} from './test.model';
import {Entity, model, property, belongsTo} from '@loopback/repository';

@model()
export class Question extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'number',
    required: true,
  })
  type: number;

  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @belongsTo(() => Test)
  test_id: number;

  constructor(data?: Partial<Question>) {
    super(data);
  }
}

export interface QuestionRelations {
  // describe navigational properties here
}

export type QuestionWithRelations = Question & QuestionRelations;
