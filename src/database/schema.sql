-- Active: 1766666457337@@127.0.0.1@5432@postgres
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL
);

UPDATE TABLE IF NOT EXISTS matches  (
  id SERIAL PRIMARY KEY,--GameID
  home TEXT NOT NULL,--HomeTeam
  away TEXT NOT NULL,--AwayTeam   
  status_match TEXT NOT NULL , -- , "scheduled", "started", "half-time", "finished" Status
  start_at TIMESTAMP DEFAULT NULL,--DateTime
  score_home INT DEFAULT 0,--HomeTeamScore
  score_away INT DEFAULT 0,--AwayTeamScore
  ended_at TIMESTAMP DEFAULT NULL, --GameEndDateTime 
  minutes TIMESTAMP DEFAULT NULL, --MinutesPlayed 
  seconds TIMESTAMP DEFAULT NULL --SecondsPlayed 
);