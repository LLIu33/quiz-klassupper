import {Entity, model, property} from '@loopback/repository';

@model()
export class Option extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  text: string;

  @property({
    type: 'boolean',
    default: false,
  })
  is_correct?: boolean;

  @property({
    type: 'number',
    required: true,
  })
  question_id: number;

  constructor(data?: Partial<Option>) {
    super(data);
  }
}

export interface OptionRelations {
  // describe navigational properties here
}

export type OptionWithRelations = Option & OptionRelations;
