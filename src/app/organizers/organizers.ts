import { Component, HostListener } from '@angular/core';

import { CommonModule } from '@angular/common';


interface Member {
  name: string;
  photoUrl: string;
  role: string;
  link: string;
  course: string; // Nova propriedade
  isFlipped?: boolean;
}

@Component({
  selector: 'app-organizers',

  imports: [CommonModule],
  templateUrl: './organizers.html',
  styleUrl: './organizers.css'
})
export class Organizers {

  isBubbleVisible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isBubbleVisible = scrollOffset <= 50;
  }

  coordinator: Member = { name: 'Marcelo Antonio Marotta', photoUrl: 'assets/organizadores/claudinho champion.png', role: 'Professor Coordenador', link: 'https://www.cic.unb.br/professores/93-marcelo-marotta', course: 'Departamento de Ciência da Computação (CIC)' };
  
  manager: Member = { name: 'Thiago Gomes da Silva Lourenco', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Gestor do Evento', link: '#', course: 'Engenharia Mecatrônica' };

  commission: Member[] = [
    { name: 'Gabriel Jose dos Santos', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Logística', link: '#', course: 'Ciência da Computação' },
    { name: 'Hugo Macedo Ramos', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Logística', link: '#', course: 'Ciência da Computação' },
    { name: 'Joao Felipe de Sousa Braz', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Gerente da Logística', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'João Lucas de Andrade Ribeiro Filho', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Comunicação', link: '#', course: 'Ciência da Computação' },
    { name: 'Letícia Picanço do Nascimento', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Comunicação', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Luca Barbosa Santos', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Logística', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Lucas Santana da Silva', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Comunicação', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Marcello da Silva Mangueira', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Logística', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Maria Clara de Carvalho Moreira', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Comunicação', link: '#', course: 'Computação/CIC' },
    { name: 'Maria Eduarda Valadares Miraglia', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Gerente da Comunicação', link: '#', course: 'Ciência da Computação' },
    { name: 'Maria Vitoria Matos Mourao', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Comunicação', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Mateus Lúcio Silva Mariano', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Financeiro', link: '#', course: 'Ciência da Computação' },
    { name: 'Pedro Araujo Cordeiro Viana', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Logística', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Pedro Daniel Bomtempo Medeiros', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Comunicação', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Thiago Cesar Roma Vieira da Silva', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Financeiro', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Vitor Alencar Ribeiro', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Financeiro', link: '#', course: 'Ciência da Computação' }
  ];
  
  toggleFlip(member: Member) {
    const currentState = member.isFlipped;
    this.coordinator.isFlipped = false;
    this.manager.isFlipped = false;
    this.commission.forEach(m => m.isFlipped = false);
    if (!currentState) {
      member.isFlipped = true;
    }
  }
}