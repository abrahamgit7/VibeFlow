import { useEffect, useMemo, useRef, useState } from 'react';

const songs = [
  {
    id: 1,
    title: 'Midnight Drive',
    artist: 'Nova Bloom',
    album: 'Electric Dreams',
    duration: '3:42',
    color: 'linear-gradient(135deg, #ff6b6b, #ffd93d)',
    cover: '🌙',
    mood: 'Night vibe',
    text: 'Smooth synth waves and warm city lights.',
  },
  {
    id: 2,
    title: 'Sunset Echo',
    artist: 'Aster Vale',
    album: 'Golden Hour',
    duration: '4:08',
    color: 'linear-gradient(135deg, #ff8a5b, #ffb199)',
    cover: '🌅',
    mood: 'Golden hour',
    text: 'A cinematic groove built for calm evenings.',
  },
  {
    id: 3,
    title: 'Neon Horizon',
    artist: 'Kairo',
    album: 'Future Memory',
    duration: '3:54',
    color: 'linear-gradient(135deg, #4facfe, #00f2fe)',
    cover: '🌃',
    mood: 'City pulse',
    text: 'Crisp, fast, and full of movement.',
  },
  {
    id: 4,
    title: 'Velvet Steps',
    artist: 'Sora Lane',
    album: 'Afterglow',
    duration: '2:58',
    color: 'linear-gradient(135deg, #43e97b, #38f9d7)',
    cover: '🌿',
    mood: 'Chill lounge',
    text: 'Slow, warm and beautifully unhurried.',
  },
  {
    id: 5,
    title: 'Skyline Jazz',
    artist: 'The Ember Collective',
    album: 'Glass Coast',
    duration: '4:31',
    color: 'linear-gradient(135deg, #c471f5, #f8d07f)',
    cover: '🎷',
    mood: 'Late lounge',
    text: 'A bright, floating blend of brass and rhythm.',
  },
  {
    id: 6,
    title: 'Cloudline',
    artist: 'Milo Raze',
    album: 'Soft Signals',
    duration: '3:16',
    color: 'linear-gradient(135deg, #6a11cb, #2575fc)',
    cover: '☁️',
    mood: 'Dream pop',
    text: 'Airy melodies with a quiet, luminous heartbeat.',
  },
];

const quickActions = ['Home', 'Discover', 'Radio', 'Library', 'Liked Songs'];
const moodPills = ['Chill', 'Focus', 'Workout', 'Night', 'Acoustic', 'Party'];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(72);
  const [searchTerm, setSearchTerm] = useState('');
  const [shuffle, setShuffle] = useState(false);
  const [likedSongs, setLikedSongs] = useState([1, 3, 4]);
  const [listening, setListening] = useState(false);
  const [voiceStatus, setVoiceStatus] = useState('Voice assistant ready');
  const [progress, setProgress] = useState(28);
  const recognitionRef = useRef(null);

  const currentSong = songs[currentIndex];
  const filteredSongs = useMemo(() => {
    if (!searchTerm.trim()) return songs;
    return songs.filter((song) => {
      const query = searchTerm.toLowerCase();
      return (
        song.title.toLowerCase().includes(query) ||
        song.artist.toLowerCase().includes(query) ||
        song.album.toLowerCase().includes(query)
      );
    });
  }, [searchTerm]);

  const toggleLike = (id) => {
    setLikedSongs((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const playSong = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
    setProgress(15);
  };

  const nextSong = () => {
    setCurrentIndex((prev) => {
      if (shuffle) {
        const nextIndex = Math.floor(Math.random() * songs.length);
        return nextIndex === prev ? (prev + 1) % songs.length : nextIndex;
      }
      return (prev + 1) % songs.length;
    });
    setProgress(10);
  };

  const prevSong = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
    setProgress(15);
  };

  const speak = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1.1;
    utterance.volume = 1;
    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceCommand = (commandText) => {
    const command = commandText.toLowerCase();

    if (/play|resume|start/.test(command)) {
      setIsPlaying(true);
      setVoiceStatus('Playing your vibe');
      speak('Playing your vibe');
      return;
    }

    if (/pause|stop/.test(command)) {
      setIsPlaying(false);
      setVoiceStatus('Paused');
      speak('Paused');
      return;
    }

    if (/next|skip/.test(command)) {
      nextSong();
      setVoiceStatus('Playing next track');
      speak('Playing next track');
      return;
    }

    if (/previous|back/.test(command)) {
      prevSong();
      setVoiceStatus('Playing previous track');
      speak('Playing previous track');
      return;
    }

    if (/shuffle/.test(command)) {
      setShuffle((prev) => !prev);
      setVoiceStatus(shuffle ? 'Shuffle off' : 'Shuffle on');
      speak(shuffle ? 'Shuffle off' : 'Shuffle on');
      return;
    }

    if (/volume up|louder/.test(command)) {
      setVolume((prev) => Math.min(100, prev + 10));
      setVoiceStatus('Volume up');
      speak('Volume up');
      return;
    }

    if (/volume down|quieter/.test(command)) {
      setVolume((prev) => Math.max(0, prev - 10));
      setVoiceStatus('Volume down');
      speak('Volume down');
      return;
    }

    if (/search for /.test(command)) {
      const query = command.replace(/search for /, '').trim();
      setSearchTerm(query);
      setVoiceStatus(`Searching for ${query}`);
      speak(`Searching for ${query}`);
      return;
    }

    if (/hello|hi/.test(command)) {
      setVoiceStatus('Hello, welcome back');
      speak('Hello, welcome back');
      return;
    }

    setVoiceStatus('I heard you. Try play, pause, next, or search');
    speak('I heard you. Try play, pause, next, or search');
  };

  useEffect(() => {
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
      setVoiceStatus('Voice recognition unavailable in this browser');
      return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.lang = 'en-US';
    recognition.interimResults = false;

    recognition.onstart = () => {
      setListening(true);
      setVoiceStatus('Listening...');
    };

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0]?.transcript)
        .join(' ')
        .trim();

      if (transcript) {
        handleVoiceCommand(transcript);
      }
    };

    recognition.onerror = (event) => {
      setVoiceStatus(`Voice error: ${event.error}`);
      setListening(false);
    };

    recognition.onend = () => {
      setListening(false);
      setVoiceStatus('Voice assistant ready');
    };

    recognitionRef.current = recognition;

    return () => recognition.stop();
  }, []);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSong();
          return 10;
        }
        return prev + 1.4;
      });
    }, 1200);

    return () => clearInterval(timer);
  }, [isPlaying, shuffle]);

  const toggleVoice = () => {
    if (!recognitionRef.current) {
      setVoiceStatus('Voice recognition is not available in this browser');
      return;
    }

    if (listening) {
      recognitionRef.current.stop();
      return;
    }

    recognitionRef.current.start();
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">V</div>
          <div>
            <p className="eyebrow">Free music app</p>
            <h1>VibeFlow</h1>
          </div>
        </div>

        <nav className="nav">
          {quickActions.map((item, index) => (
            <button key={item} className={`nav-item ${index === 0 ? 'active' : ''}`}>
              {item}
            </button>
          ))}
        </nav>

        <div className="library-box">
          <div className="section-header compact">
            <span>Your mix</span>
            <button>+</button>
          </div>
          <div className="mini-playlist">
            <span className="dot green" />
            <span>Deep focus</span>
          </div>
          <div className="mini-playlist">
            <span className="dot orange" />
            <span>Night city</span>
          </div>
          <div className="mini-playlist">
            <span className="dot purple" />
            <span>Sunrise drive</span>
          </div>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search artists, songs, albums"
            />
          </div>

          <div className="topbar-actions">
            <button className="voice-button ${listening ? 'listening' : ''}" onClick={toggleVoice}>
              {listening ? '● Listening' : '🎙 Voice'}
            </button>
            <div className="avatar">A</div>
          </div>
        </header>

        <section className="hero-card">
          <div className="hero-text">
            <p className="eyebrow light">Daily discovery</p>
            <h2>Feel the rhythm of your city.</h2>
            <p>
              A streaming experience designed for mood, motion, and music discovery — without a paywall.
            </p>
            <div className="hero-actions">
              <button className="primary">Play mix</button>
              <button className="secondary">Follow</button>
            </div>
          </div>

          <div className="hero-art" style={{ background: currentSong.color }}>
            <div className="orb orb-one" />
            <div className="orb orb-two" />
            <div className="cover-badge">{currentSong.cover}</div>
          </div>
        </section>

        <section className="chip-row">
          {moodPills.map((pill) => (
            <button key={pill} className="chip">
              {pill}
            </button>
          ))}
        </section>

        <section className="content-grid">
          <div className="panel playlists-panel">
            <div className="section-header">
              <span>For you</span>
              <button>See all</button>
            </div>

            <div className="playlist-grid">
              {filteredSongs.map((song, index) => (
                <article key={song.id} className={`track-card ${index === currentIndex ? 'selected' : ''}`}>
                  <button className="cover" style={{ background: song.color }} onClick={() => playSong(index)}>
                    <span>{song.cover}</span>
                  </button>
                  <div className="track-meta">
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                  </div>
                  <button className="like-button" onClick={() => toggleLike(song.id)}>
                    {likedSongs.includes(song.id) ? '♥' : '♡'}
                  </button>
                </article>
              ))}
            </div>
          </div>

          <div className="panel now-playing-panel">
            <div className="section-header">
              <span>Now playing</span>
              <button>Queue</button>
            </div>

            <div className="now-playing-art" style={{ background: currentSong.color }}>
              <span>{currentSong.cover}</span>
            </div>

            <div className="now-playing-details">
              <h3>{currentSong.title}</h3>
              <p>{currentSong.artist}</p>
              <small>{currentSong.mood}</small>
            </div>

            <div className="progress-wrap">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
              <div className="timeline-labels">
                <span>1:22</span>
                <span>{currentSong.duration}</span>
              </div>
            </div>

            <div className="voice-box">
              <span className="voice-indicator" />
              {voiceStatus}
            </div>
          </div>
        </section>
      </main>

      <footer className="player-bar">
        <div className="player-left">
          <div className="mini-cover" style={{ background: currentSong.color }}>
            {currentSong.cover}
          </div>
          <div>
            <strong>{currentSong.title}</strong>
            <span>{currentSong.artist}</span>
          </div>
        </div>

        <div className="player-center">
          <div className="transport-controls">
            <button onClick={prevSong}>⏮</button>
            <button className="play-toggle" onClick={() => setIsPlaying((prev) => !prev)}>
              {isPlaying ? '⏸' : '▶'}
            </button>
            <button onClick={nextSong}>⏭</button>
            <button className={shuffle ? 'active' : ''} onClick={() => setShuffle((prev) => !prev)}>
              🔀
            </button>
          </div>
        </div>

        <div className="player-right">
          <span>🔈</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(Number(e.target.value))}
          />
          <span>{volume}%</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
