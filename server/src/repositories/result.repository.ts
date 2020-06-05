import {DefaultCrudRepository} from '@loopback/repository';
import {Result, ResultRelations} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ResultRepository extends DefaultCrudRepository<
  Result,
  typeof Result.prototype.id,
  ResultRelations
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Result, dataSource);
  }
}
