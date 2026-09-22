import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AIService, AIMessage } from '../../../core/services/ai.service';
import { LoadingSpinnerComponent } from '../../../shared/components/loading-spinner/loading-spinner.component';

@Component({
  selector: 'app-ai-assistant',
  standalone: true,
  imports: [CommonModule, FormsModule, LoadingSpinnerComponent],

  template: `
    <div class="assistant-page">

      <!-- HEADER -->
      <div class="assistant-intro">
        <div class="intro-left">
          <div class="ai-logo">
            <i class="fa-solid fa-robot"></i>
            <span class="online-dot"></span>
          </div>

          <div>
            <div class="title-row">
              <h1>AI Health Assistant</h1>
              <span class="status-badge">
                <span class="status-dot"></span>
                Online
              </span>
            </div>

            <p>
              Your intelligent healthcare companion for medical information,
              report explanations and general health guidance.
            </p>
          </div>
        </div>

        <button class="clear-btn" (click)="clearChat()">
          <i class="fa-solid fa-rotate-right"></i>
          New Chat
        </button>
      </div>


      <!-- DISCLAIMER -->
      <div class="disclaimer">
        <div class="disclaimer-icon">
          <i class="fa-solid fa-shield-heart"></i>
        </div>

        <div>
          <strong>Medical Information Notice</strong>
          <p>
            This assistant provides general educational information and
            does not replace professional medical diagnosis or treatment.
          </p>
        </div>
      </div>


      <!-- QUICK QUESTIONS -->
      <div class="suggestions-section">

        <div class="section-heading">
          <div>
            <h3>What can I help you with?</h3>
            <span>Choose a topic or ask your own question</span>
          </div>

          <i class="fa-solid fa-wand-magic-sparkles"></i>
        </div>

        <div class="suggestion-grid">

          <button
            class="suggestion-card"
            (click)="askPreset('What does high SGPT level indicate on LFT?')">

            <div class="suggestion-icon blue">
              <i class="fa-solid fa-flask"></i>
            </div>

            <div>
              <strong>Explain my report</strong>
              <span>Understand LFT & KFT values</span>
            </div>

            <i class="fa-solid fa-arrow-right arrow"></i>
          </button>


          <button
            class="suggestion-card"
            (click)="askPreset('What is the difference between Type 1 and Type 2 Diabetes?')">

            <div class="suggestion-icon purple">
              <i class="fa-solid fa-droplet"></i>
            </div>

            <div>
              <strong>Diabetes information</strong>
              <span>Learn about diabetes types</span>
            </div>

            <i class="fa-solid fa-arrow-right arrow"></i>
          </button>


          <button
            class="suggestion-card"
            (click)="askPreset('What are normal Blood Pressure readings by age?')">

            <div class="suggestion-icon green">
              <i class="fa-solid fa-heart-pulse"></i>
            </div>

            <div>
              <strong>Blood pressure</strong>
              <span>Check normal BP ranges</span>
            </div>

            <i class="fa-solid fa-arrow-right arrow"></i>
          </button>


          <button
            class="suggestion-card"
            (click)="askPreset('What are emergency warning signs of cardiac arrest?')">

            <div class="suggestion-icon red">
              <i class="fa-solid fa-truck-medical"></i>
            </div>

            <div>
              <strong>Emergency signs</strong>
              <span>Recognize cardiac warning signs</span>
            </div>

            <i class="fa-solid fa-arrow-right arrow"></i>
          </button>

        </div>
      </div>


      <!-- CHAT CARD -->
      <div class="chat-card">

        <!-- CHAT HEADER -->
        <div class="chat-card-header">

          <div class="assistant-profile">
            <div class="mini-avatar">
              <i class="fa-solid fa-robot"></i>
            </div>

            <div>
              <strong>AI Medical Assistant</strong>
              <span>
                <span class="status-dot"></span>
                Ready to assist
              </span>
            </div>
          </div>

          <div class="secure-label">
            <i class="fa-solid fa-lock"></i>
            Secure Session
          </div>

        </div>


        <!-- MESSAGES -->
        <div class="messages-stream">

          <!-- EMPTY / WELCOME -->
          <div
            class="welcome-state"
            *ngIf="messages.length === 1 && !isLoading">

            <div class="welcome-icon">
              <i class="fa-solid fa-stethoscope"></i>
            </div>

            <h2>How can I help you today?</h2>

            <p>
              Ask me about symptoms, medical terms, laboratory reports
              or general healthcare information.
            </p>
          </div>


          <!-- MESSAGE LIST -->
          <div
            *ngFor="let msg of messages"
            class="message-row"
            [ngClass]="msg.role === 'user' ? 'user-row' : 'assistant-row'">

            <div
              class="message-avatar"
              *ngIf="msg.role !== 'user'">

              <i class="fa-solid fa-robot"></i>
            </div>


            <div class="message-wrapper">

              <div class="message-name">
                {{ msg.role === 'user' ? 'You' : 'AI Medical Assistant' }}
              </div>

              <div
                class="message-bubble"
                [ngClass]="msg.role === 'user' ? 'user-message' : 'assistant-message'">

                <div [innerHTML]="formatMessage(msg.content)"></div>

              </div>

            </div>

          </div>


          <!-- LOADING -->
          <div
            class="message-row assistant-row"
            *ngIf="isLoading">

            <div class="message-avatar">
              <i class="fa-solid fa-robot"></i>
            </div>

            <div class="message-wrapper">

              <div class="message-name">
                AI Medical Assistant
              </div>

              <div class="assistant-message typing">

                <span></span>
                <span></span>
                <span></span>

                <label>Analyzing your question...</label>

              </div>

            </div>
          </div>

        </div>


        <!-- INPUT -->
        <div class="chat-input-area">

          <div class="input-wrapper">

            <i class="fa-solid fa-message input-icon"></i>

            <input
              type="text"
              [(ngModel)]="userInput"
              (keyup.enter)="sendMessage()"
              placeholder="Ask a health question..."
              [disabled]="isLoading"
            />

            <button
              class="send-btn"
              (click)="sendMessage()"
              [disabled]="!userInput.trim() || isLoading">

              <i class="fa-solid fa-paper-plane"></i>
            </button>

          </div>

          <div class="input-footer">
            <span>
              <i class="fa-solid fa-circle-info"></i>
              AI responses are for informational purposes only.
            </span>

            <span>
              Press <strong>Enter</strong> to send
            </span>
          </div>

        </div>

      </div>

    </div>
  `,

  styles: [`

    /* ================================
       MAIN PAGE
    ================================= */

    .assistant-page {
      max-width: 1200px;
      margin: 0 auto;
    }


    /* ================================
       INTRO
    ================================= */

    .assistant-intro {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.5rem;
      gap: 1rem;
    }

    .intro-left {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .ai-logo {
      width: 58px;
      height: 58px;
      border-radius: 16px;
      
      background: linear-gradient(
        135deg,
        var(--primary),
        var(--secondary)
      );
      color: #15803d;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.6rem;
      position: relative;
      box-shadow: 0 8px 20px rgba(0,0,0,.08);
    }

    .online-dot {
      position: absolute;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #22c55e;
      border: 2px solid white;
      right: 2px;
      bottom: 2px;
    }

    .title-row {
      display: flex;
      align-items: center;
      gap: .75rem;
      flex-wrap: wrap;
    }

    .title-row h1 {
      margin: 0;
      font-size: 1.65rem;
      font-weight: 800;
      color: var(--text-main);
    }

    .assistant-intro p {
      margin: .35rem 0 0;
      color: var(--text-muted);
      font-size: .9rem;
    }

    .status-badge {
      display: flex;
      align-items: center;
      gap: .35rem;
      padding: .25rem .65rem;
      border-radius: 999px;
      background: #ecfdf5;
      color: #15803d;
      font-size: .72rem;
      font-weight: 700;
    }

    .status-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #22c55e;
      display: inline-block;
    }

    .clear-btn {
      border: 1px solid var(--border-color);
      background: white;
      padding: .6rem .9rem;
      border-radius: var(--radius-md);
      cursor: pointer;
      font-weight: 600;
      color: var(--text-muted);
      transition: .2s;
    }

    .clear-btn:hover {
      color: var(--primary);
      border-color: var(--primary);
      background: var(--primary-light);
    }


    /* ================================
       DISCLAIMER
    ================================= */

    .disclaimer {
      display: flex;
      align-items: center;
      gap: .85rem;
      padding: .9rem 1rem;
      border: 1px solid #fde68a;
      background: #fffbeb;
      border-radius: var(--radius-md);
      margin-bottom: 1.5rem;
    }

    .disclaimer-icon {
      width: 38px;
      height: 38px;
      flex-shrink: 0;
      border-radius: 10px;
      background: #fef3c7;
      color: #d97706;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .disclaimer strong {
      font-size: .82rem;
      color: #92400e;
    }

    .disclaimer p {
      margin: .15rem 0 0;
      font-size: .78rem;
      color: #92400e;
    }


    /* ================================
       SUGGESTIONS
    ================================= */

    .suggestions-section {
      margin-bottom: 1.5rem;
    }

    .section-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: .75rem;
    }

    .section-heading h3 {
      margin: 0;
      font-size: 1rem;
      font-weight: 800;
    }

    .section-heading span {
      display: block;
      color: var(--text-muted);
      font-size: .78rem;
      margin-top: .15rem;
    }

    .section-heading > i {
      color: var(--primary);
      font-size: 1.1rem;
    }

    .suggestion-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: .75rem;
    }

    .suggestion-card {
      border: 1px solid var(--border-color);
      background: white;
      border-radius: var(--radius-md);
      padding: .9rem;
      display: flex;
      align-items: center;
      gap: .7rem;
      text-align: left;
      cursor: pointer;
      transition: .2s;
      min-width: 0;
    }

    .suggestion-card:hover {
      transform: translateY(-2px);
      border-color: var(--primary);
      box-shadow: var(--shadow-sm);
    }

    .suggestion-icon {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .suggestion-icon.blue {
      background: #eff6ff;
      color: #2563eb;
    }

    .suggestion-icon.purple {
      background: #f5f3ff;
      color: #7c3aed;
    }

    .suggestion-icon.green {
      background: #ecfdf5;
      color: #16a34a;
    }

    .suggestion-icon.red {
      background: #fef2f2;
      color: #dc2626;
    }

    .suggestion-card strong {
      display: block;
      font-size: .78rem;
      color: var(--text-main);
    }

    .suggestion-card span {
      display: block;
      margin-top: .15rem;
      font-size: .68rem;
      color: var(--text-muted);
    }

    .arrow {
      margin-left: auto;
      font-size: .7rem;
      color: var(--text-light);
    }


    /* ================================
       CHAT CARD
    ================================= */

    .chat-card {
      background: white;
      border: 1px solid var(--border-color);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-sm);
    }

    .chat-card-header {
      padding: 1rem 1.25rem;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .assistant-profile {
      display: flex;
      align-items: center;
      gap: .7rem;
    }

    .mini-avatar {
      width: 40px;
      height: 40px;
      border-radius: 12px;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .assistant-profile strong {
      display: block;
      font-size: .85rem;
    }

    .assistant-profile span {
      display: flex;
      align-items: center;
      gap: .3rem;
      font-size: .7rem;
      color: var(--text-muted);
      margin-top: .15rem;
    }

    .secure-label {
      font-size: .7rem;
      color: var(--text-muted);
      display: flex;
      align-items: center;
      gap: .35rem;
    }


    /* ================================
       MESSAGES
    ================================= */

    .messages-stream {
      height: 430px;
      overflow-y: auto;
      padding: 1.5rem;
      background: #f8fafc;
    }

    .welcome-state {
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      max-width: 450px;
      margin: auto;
    }

    .welcome-icon {
      width: 65px;
      height: 65px;
      border-radius: 20px;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .welcome-state h2 {
      margin: 0;
      font-size: 1.15rem;
    }

    .welcome-state p {
      color: var(--text-muted);
      font-size: .8rem;
      line-height: 1.6;
    }

    .message-row {
      display: flex;
      gap: .65rem;
      margin-bottom: 1.1rem;
    }

    .user-row {
      justify-content: flex-end;
    }

    .message-avatar {
      width: 32px;
      height: 32px;
      border-radius: 10px;
      background: var(--primary-light);
      color: var(--primary);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      font-size: .8rem;
    }

    .message-wrapper {
      max-width: 72%;
    }

    .message-name {
      font-size: .68rem;
      font-weight: 700;
      color: var(--text-muted);
      margin-bottom: .3rem;
    }

    .user-row .message-name {
      text-align: right;
    }

    .message-bubble {
      padding: .8rem 1rem;
      border-radius: 14px;
      font-size: .82rem;
      line-height: 1.6;
    }

    .assistant-message {
      background: white;
      border: 1px solid var(--border-color);
      border-top-left-radius: 4px;
      color: var(--text-main);
    }

    .user-message {
      background: var(--primary);
      color: white;
      border-top-right-radius: 4px;
    }


    /* ================================
       TYPING
    ================================= */

    .typing {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .typing span {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--primary);
      animation: typing 1.2s infinite;
    }

    .typing span:nth-child(2) {
      animation-delay: .15s;
    }

    .typing span:nth-child(3) {
      animation-delay: .3s;
    }

    .typing label {
      margin-left: .4rem;
      font-size: .7rem;
      color: var(--text-muted);
    }

    @keyframes typing {
      0%, 60%, 100% {
        transform: translateY(0);
        opacity: .4;
      }

      30% {
        transform: translateY(-3px);
        opacity: 1;
      }
    }


    /* ================================
       INPUT
    ================================= */

    .chat-input-area {
      padding: 1rem 1.25rem;
      border-top: 1px solid var(--border-color);
      background: white;
    }

    .input-wrapper {
      display: flex;
      align-items: center;
      gap: .65rem;
      border: 1px solid var(--border-color);
      border-radius: 14px;
      padding: .4rem .45rem .4rem .85rem;
      transition: .2s;
    }

    .input-wrapper:focus-within {
      border-color: var(--primary);
      box-shadow: 0 0 0 3px var(--primary-light);
    }

    .input-icon {
      color: var(--text-light);
      font-size: .85rem;
    }

    .input-wrapper input {
      flex: 1;
      border: none;
      outline: none;
      background: transparent;
      font-size: .85rem;
      color: var(--text-main);
      min-width: 0;
    }

    .send-btn {
      width: 40px;
      height: 40px;
      border: none;
      border-radius: 10px;
      background: var(--primary);
      color: white;
      cursor: pointer;
      transition: .2s;
    }

    .send-btn:hover:not(:disabled) {
      transform: translateY(-1px);
      opacity: .9;
    }

    .send-btn:disabled {
      opacity: .45;
      cursor: not-allowed;
    }

    .input-footer {
      display: flex;
      justify-content: space-between;
      margin-top: .55rem;
      color: var(--text-light);
      font-size: .65rem;
    }


    /* ================================
       RESPONSIVE
    ================================= */

    @media (max-width: 1000px) {

      .suggestion-grid {
        grid-template-columns: repeat(2, 1fr);
      }

    }

    @media (max-width: 700px) {

      .assistant-intro {
        align-items: flex-start;
      }

      .assistant-intro p {
        display: none;
      }

      .suggestion-grid {
        grid-template-columns: 1fr;
      }

      .secure-label {
        display: none;
      }

      .messages-stream {
        height: 400px;
        padding: 1rem;
      }

      .message-wrapper {
        max-width: 88%;
      }

      .input-footer span:last-child {
        display: none;
      }

    }

  `]
})
export class AiAssistantComponent {

  private aiService = inject(AIService);

  userInput = '';
  isLoading = false;

  messages: AIMessage[] = [
    {
      role: 'assistant',
      content:
        'Hello! I am your **AI Medical Assistant** for West Bengal healthcare. You can ask me to explain medical terminology, diagnostic report values like LFT, KFT and Lipid Profile, or general health guidelines. How may I assist you today?'
    }
  ];


  askPreset(query: string): void {
    this.userInput = query;
    this.sendMessage();
  }


  sendMessage(): void {

    const q = this.userInput.trim();

    if (!q || this.isLoading) {
      return;
    }

    this.messages.push({
      role: 'user',
      content: q
    });

    this.userInput = '';
    this.isLoading = true;

    this.aiService.askMedicalAssistant(
      q,
      this.messages
    ).subscribe({

      next: (res) => {

        this.isLoading = false;

        if (res.success && res.data) {

          this.messages.push({
            role: 'assistant',
            content: res.data.answer
          });

        }

      },

      error: () => {

        this.isLoading = false;

        this.messages.push({
          role: 'assistant',
          content:
            'Apologies, I encountered an issue processing your query. Please check your network connection or try again.'
        });

      }

    });

  }


  clearChat(): void {

    this.messages = [
      {
        role: 'assistant',
        content:
          'Chat refreshed. Ask me any general health questions or laboratory report inquiries.'
      }
    ];

    this.userInput = '';

  }


  formatMessage(text: string): string {

    return text
      .replace(/\n/g, '<br>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  }

}