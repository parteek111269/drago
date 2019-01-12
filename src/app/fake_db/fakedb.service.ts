import { InMemoryDbService } from 'angular-in-memory-web-api';
import { ScrumboardFakeDb } from './scrumboard'

export class FakeDbService implements InMemoryDbService {
	createDb(): any {
		return {
			// all boards
			'scrumboard': ScrumboardFakeDb.boards
		}
	}
}