import { StorableEvent } from 'event-sourcing-nestjs';

export class UserRoleWasRemoved extends StorableEvent {
  eventAggregate = 'user';
  eventVersion = 1;

  constructor(public readonly id: string, public readonly role: string) {
    super();
  }
}
