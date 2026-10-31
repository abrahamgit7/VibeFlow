:root {
  font-family: 'Inter', sans-serif;
  color: #f5f7ff;
  background: #090b13;
  line-height: 1.5;
  font-weight: 500;
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

html, body, #root {
  margin: 0;
  min-height: 100%;
  height: 100%;
  background:
    radial-gradient(circle at top left, rgba(106, 17, 203, 0.3), transparent 30%),
    radial-gradient(circle at bottom right, rgba(37, 117, 252, 0.3), transparent 35%),
    #090b13;
}

body {
  min-height: 100vh;
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
  border: none;
}

.app-shell {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 260px 1fr;
  background: rgba(11, 12, 20, 0.92);
  color: #edf3ff;
  backdrop-filter: blur(18px);
}

.sidebar {
  padding: 26px 18px 18px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  background: rgba(16, 18, 28, 0.88);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 30px;
}

.brand-mark {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  font-weight: 800;
  background: linear-gradient(135deg, #ff5f6d, #ffc371);
  color: #10131e;
}

.eyebrow {
  margin: 0;
  font-size: 11px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  opacity: 0.7;
}

.brand-wrap h1 {
  margin: 4px 0 0;
  font-size: 1.45rem;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.nav-item {
  width: 100%;
  border-radius: 12px;
  padding: 12px 14px;
  text-align: left;
  color: #c6cedc;
  background: transparent;
  transition: 0.2s ease;
}

.nav-item:hover,
.nav-item.active {
  background: rgba(255, 255, 255, 0.06);
  color: white;
}

.library-box {
  margin-top: 28px;
  padding: 18px 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 18px;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  font-weight: 700;
}

.section-header.compact {
  margin-bottom: 12px;
}

.section-header button {
  background: transparent;
  color: #c6cedc;
  border: none;
}

.mini-playlist {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 6px;
  border-radius: 10px;
  color: #d9e1f1;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.dot.green { background: #3ddc97; }
.dot.orange { background: #ff9f43; }
.dot.purple { background: #b884ff; }

.main-panel {
  display: flex;
  flex-direction: column;
  padding: 28px 28px 18px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 22px;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 16px;
  padding: 14px 16px;
}

.search-box input {
  width: 100%;
  background: transparent;
  border: none;
  color: #edf3ff;
  outline: none;
}

.search-box input::placeholder {
  color: rgba(255, 255, 255, 0.5);
}

.topbar-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.voice-button {
  padding: 11px 16px;
  background: linear-gradient(135deg, #5c7cff, #8a5cf6);
  color: white;
  border-radius: 14px;
  font-weight: 600;
}

.voice-button.listening {
  background: linear-gradient(135deg, #ff5f6d, #ffc371);
  animation: pulse 1.2s infinite;
}

@keyframes pulse {
  0% { box-shadow: 0 0 0 rgba(255, 95, 109, 0.45); }
  70% { box-shadow: 0 0 0 12px rgba(255, 95, 109, 0.05); }
  100% { box-shadow: 0 0 0 0 rgba(255, 95, 109, 0); }
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #ffb347, #ff7b54);
  color: #17212c;
  font-weight: 800;
}

.hero-card {
  display: grid;
  grid-template-columns: 1.3fr 0.9fr;
  gap: 18px;
  align-items: center;
  padding: 26px;
  border-radius: 26px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
}

.hero-text h2 {
  margin: 8px 0 10px;
  font-size: clamp(2rem, 3vw, 3.2rem);
  line-height: 1.05;
  letter-spacing: -0.05em;
}

.hero-text p {
  margin: 0;
  color: rgba(237, 243, 255, 0.8);
  max-width: 540px;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 22px;
}

.primary,
.secondary {
  border-radius: 14px;
  padding: 12px 18px;
  font-weight: 700;
}

.primary {
  background: linear-gradient(135deg, #41d1ff, #6c5ef8);
  color: white;
}

.secondary {
  background: rgba(255, 255, 255, 0.06);
  color: white;
}

.hero-art {
  position: relative;
  min-height: 260px;
  border-radius: 24px;
  overflow: hidden;
  display: grid;
  place-items: center;
}

.orb {
  position: absolute;
  border-radius: 50%;
  opacity: 0.25;
  filter: blur(12px);
}

.orb-one {
  width: 180px;
  height: 180px;
  background: rgba(255, 255, 255, 0.5);
  top: -20px;
  right: 40px;
}

.orb-two {
  width: 220px;
  height: 220px;
  background: rgba(27, 24, 58, 0.55);
  bottom: -10px;
  left: -10px;
}

.cover-badge {
  position: relative;
  z-index: 1;
  width: 120px;
  height: 120px;
  display: grid;
  place-items: center;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.12);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-size: 4rem;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.25);
}

.chip-row {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin: 24px 0 18px;
}

.chip {
  padding: 10px 14px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.05);
  color: #dfe7ff;
  border: 1px solid rgba(255, 255, 255, 0.05);
}

.content-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.75fr;
  gap: 20px;
  min-height: 0;
}

.panel {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 22px;
  padding: 18px 16px 16px;
}

.playlist-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
}

.track-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.025);
  border-radius: 18px;
  padding: 12px;
  border: 1px solid transparent;
}

.track-card.selected {
  border-color: rgba(92, 124, 255, 0.75);
  box-shadow: 0 0 0 1px rgba(130, 151, 255, 0.6);
}

.cover {
  width: 64px;
  height: 64px;
  border-radius: 18px;
  display: grid;
  place-items: center;
  font-size: 2rem;
  flex-shrink: 0;
}

.track-meta {
  flex: 1;
  min-width: 0;
}

.track-meta h3,
.now-playing-details h3 {
  margin: 0;
  font-size: 1rem;
}

.track-meta p,
.now-playing-details p,
.now-playing-details small {
  margin: 2px 0 0;
  color: rgba(237, 243, 255, 0.7);
}

.like-button {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.now-playing-panel {
  display: flex;
  flex-direction: column;
}

.now-playing-art {
  height: 180px;
  border-radius: 20px;
  display: grid;
  place-items: center;
  font-size: 5rem;
  margin: 10px 0 16px;
}

.now-playing-details {
  margin-bottom: 14px;
}

.progress-wrap {
  margin-top: auto;
}

.progress-bar {
  width: 100%;
  height: 8px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(90deg, #6c5ef8, #41d1ff);
}

.timeline-labels {
  display: flex;
  justify-content: space-between;
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.7);
  margin-top: 8px;
}

.voice-box {
  margin-top: 22px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #dfe7ff;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 12px;
  padding: 10px 12px;
}

.voice-indicator {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #7ef0b0;
  box-shadow: 0 0 0 6px rgba(126, 240, 176, 0.18);
}

.player-bar {
  position: sticky;
  bottom: 0;
  display: grid;
  grid-template-columns: 1fr 1.4fr 0.95fr;
  gap: 18px;
  align-items: center;
  padding: 16px 24px;
  background: rgba(10, 11, 18, 0.88);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
}

.player-left,
.player-right,
.transport-controls {
  display: flex;
  align-items: center;
}

.player-left {
  gap: 12px;
}

.player-left strong,
.player-left span {
  display: block;
}

.player-left span {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.8rem;
}

.mini-cover {
  width: 52px;
  height: 52px;
  border-radius: 14px;
  display: grid;
  place-items: center;
  font-size: 1.7rem;
}

.player-center {
  display: flex;
  justify-content: center;
}

.transport-controls {
  gap: 10px;
}

.transport-controls button {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.05);
  color: white;
}

.transport-controls .play-toggle {
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #5c7cff, #8a5cf6);
  font-size: 1.1rem;
}

.transport-controls .active {
  background: rgba(124, 92, 255, 0.18);
  color: #cfc7ff;
}

.player-right {
  justify-content: flex-end;
  gap: 10px;
}

.player-right input[type='range'] {
  width: 120px;
  accent-color: #7b8cff;
}

@media (max-width: 980px) {
  .app-shell {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .hero-card,
  .content-grid {
    grid-template-columns: 1fr;
  }

  .playlist-grid {
    grid-template-columns: 1fr;
  }

  .player-bar {
    grid-template-columns: 1fr;
  }

  .player-right {
    justify-content: flex-start;
  }
}
