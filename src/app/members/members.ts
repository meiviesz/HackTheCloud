import { Component } from '@angular/core';
import { MemberService } from '../services/member.service';
import { GroupedMembers, MemberArea, MemberDto, MemberRole } from './dto/member.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-members',
  imports: [CommonModule],
  templateUrl: './members.html',
  styleUrl: './members.css'
})
export class Members {
  /* member = {
      name: 'Mavi Mourão',
      role: 'Chata',
      course: 'Realeza de Fofura',
      link: 'https://www.linkedin.com/in/alicejohnson',
      image: 'assets/members/alice.jpg'
  }; */

  groupedMembers: GroupedMembers = new Map();
  isLoading: boolean = true;

  areaOrder = Object.keys(MemberArea) as MemberArea[];

  constructor(private memberService: MemberService) {}

  async ngOnInit() {
    await this.processMembers();
    this.isLoading = false;
  }

  private async processMembers() {
    let members: MemberDto[] = [];

    try {
      const rawData = await this.memberService.fetchRawMembers();
      members = rawData.map(item => ({
        name: item[0],
        course: item[1],
        area: item[2] as MemberArea,
        role: item[3] as MemberRole,
        photoName: item[4],
        photoId: item[5]
      }));

      console.log('Membros processados:', members);

    } catch (error) {
      console.error('Erro ao processar membros:', error);
    }

    const tempGroup: GroupedMembers = new Map();

    members.forEach((member) => {
      const areaKey = (Object.keys(MemberArea) as (keyof typeof MemberArea)[]).find(
        key => MemberArea[key] === member.area
      ) as MemberArea;

      if (!tempGroup.has(areaKey)) {
        tempGroup.set(areaKey, []);
      }
      tempGroup.get(areaKey)!.push(member);
    });

    tempGroup.forEach((memberList, area) => {
      memberList.sort((a, b) => {
        const roleAIndex = Object.values(MemberRole).indexOf(a.role);
        const roleBIndex = Object.values(MemberRole).indexOf(b.role);

        if (roleAIndex !== roleBIndex) {
          return roleAIndex - roleBIndex;
        }
        return a.name.localeCompare(b.name);
      });

      console.log(area, memberList);

      this.groupedMembers.set(area, memberList);
    });

    console.log('Grouped Members:', this.groupedMembers);
  }

  toggleFlip(memberCard: HTMLElement) {
    memberCard.classList.toggle('flipped');
  }
}
