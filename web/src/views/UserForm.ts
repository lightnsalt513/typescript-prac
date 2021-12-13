import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onClickSetAage,
      'click:.set-name': this.onClickSetName,
      'click:.set-save': this.onClickSetSave
    }
  }

  onClickSetAage = (): void => {
    this.model.setRandomAge();
  }

  onClickSetName = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  }

  onClickSetSave = (): void => {
    this.model.save();
  }

  template(): string {
    return `
      <div>
        <input placehoder=${this.model.get('name')} />
        <button class="set-name">Change Name</button>
        <button class="set-age">Set Random Age</button>
        <button class="set-save">Save</button>
      </div>
    `;
  }
}