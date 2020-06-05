import {DefaultCrudRepository} from '@loopback/repository';
import {Question, QuestionRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class QuestionRepository extends DefaultCrudRepository<
  Question,
  typeof Question.prototype.id,
  QuestionRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Question, dataSource);
  }
}
