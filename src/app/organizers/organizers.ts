import { Component, HostListener, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Member {
  name: string;
  photoUrl: string;
  role: string;
  link: string;
  course: string;
  isFlipped?: boolean;
}

@Component({
  selector: 'app-organizers',
  standalone: false,
  templateUrl: './organizers.html',
  styleUrls: ['./organizers.css']
})
export class Organizers {

  @ViewChild('videoMascot') videoMascot!: ElementRef<HTMLVideoElement>;
  
  isBubbleVisible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isBubbleVisible = scrollOffset <= 50;
  }
  
  // --- FUNÇÕES DE VÍDEO ATUALIZADAS ---

  playMascotVideo() {
    // Verifica se o elemento de vídeo existe
    if (this.videoMascot && this.videoMascot.nativeElement) {
      
      // 1. Força o 'muted' antes de tocar (Boa prática)
      this.videoMascot.nativeElement.muted = true;
      
      // 2. A função .play() retorna uma Promise
      const playPromise = this.videoMascot.nativeElement.play();

      if (playPromise !== undefined) {
        // 3. Capturamos se o navegador bloquear o play
        playPromise.catch(error => {
          // O navegador bloqueou o autoplay. Isso é comum.
          // Não faremos nada, apenas registraremos o erro no console.
          console.warn("A reprodução automática do vídeo do mascote foi bloqueada pelo navegador:", error);
        });
      }
    }
  }

  pauseMascotVideo() {
    // Verifica se o elemento de vídeo existe
    if (this.videoMascot && this.videoMascot.nativeElement) {
      this.videoMascot.nativeElement.pause();
      this.videoMascot.nativeElement.currentTime = 0;
    }
  }
  // --- FIM DAS FUNÇÕES ATUALIZADAS ---

  coordinator: Member = { name: 'Marcelo Antonio Marotta', photoUrl: 'assets/organizadores/marcelo_marotta.jpg', role: 'Professor Coordenador', link: 'https://www.cic.unb.br/professores/93-marcelo_marotta', course: 'Departamento de Ciência da Computação (CIC)' };
  manager: Member = { name: 'Thiago Gomes da Silva', photoUrl: 'assets/organizadores/thiago_gomes.jpg', role: 'Gestor do Evento', link: '#', course: 'Engenharia Mecatrônica' };
  commission: Member[] = [
    { name: 'Gabriel Jose dos Santos', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Logística', link: '#', course: 'Ciência da Computação' },
    { name: 'Hugo Macedo Ramos', photoUrl: 'assets/organizadores/hugo.jpg', role: 'Logística', link: '#', course: 'Ciência da Computação' },
    { name: 'Joao Felipe de Sousa Braz', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Gerente da Logística', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'João Lucas de Andrade', photoUrl: 'assets/organizadores/joao_lucas.jpg', role: 'Comunicação', link: '#', course: 'Ciência da Computação' },
    { name: 'Letícia Picanço', photoUrl: 'assets/organizadores/leticia.jpg', role: 'Comunicação', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Luca Barbosa Santos', photoUrl: 'assets/organizadores/luca.jpg', role: 'Logística', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Lucas Santana', photoUrl: 'assets/organizadores/lucas.jpg', role: 'Comunicação', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Marcello da Silva Mangueira', photoUrl: 'assets/organizadores/claudinho coder happy.png', role: 'Logística', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Maria Clara de Carvalho', photoUrl: 'assets/organizadores/maria.jpg', role: 'Comunicação', link: '#', course: 'Computação/CIC' },
    { name: 'Maria Eduarda Valadares', photoUrl: 'assets/organizadores/maria_eduarda.jpg', role: 'Gerente da Comunicação', link: '#', course: 'Ciência da Computação' },
    { name: 'Maria Vitoria Matos Mourao', photoUrl: 'assets/organizadores/maria_vitoria.jpg', role: 'Comunicação', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Mateus Lúcio Silva Mariano', photoUrl: 'assets/organizadores/mateus.jpg', role: 'Financeiro', link: '#', course: 'Ciência da Computação' },
    { name: 'Pedro Araujo Cordeiro Viana', photoUrl: 'assets/organizadores/pedro.jpg', role: 'Logística', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Pedro Daniel Bomtempo', photoUrl: 'assets/organizadores/pedro_daniel.jpg', role: 'Comunicação', link: '#', course: 'Engenharia Mecatrônica' },
    { name: 'Thiago Cesar Roma Vieira', photoUrl: 'assets/organizadores/thiago_roma.jpg', role: 'Financeiro', link: '#', course: 'Engenharia Mecatrônica' },
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
