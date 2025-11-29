import { Injectable } from '@angular/core';
import { MemberDto } from '../members/dto/member.dto';

type RawMemberData = string[][];

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  
  private readonly MEMBERS_API = 'https://script.google.com/macros/s/AKfycbxdZbjAGZvpjFx9HxEcyhxIYGvY5R6vvdSItlkz8c6iuI2mqig6PxxPO-VIuHzmMGfG/exec';

  constructor() {}

  fetchRawMembers(): Promise<RawMemberData> {
    return fetch(this.MEMBERS_API)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => data as RawMemberData);
  }
}