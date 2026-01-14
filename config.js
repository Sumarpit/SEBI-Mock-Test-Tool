// config.js

// --- 1. GITHUB CONFIGURATION ---
// This connects the tool to your specific repository
const REPO_OWNER = "Sumarpit";
const REPO_NAME = "SEBI-Mock-Test-Tool";

// --- 2. EXAM PROFILES ---
// Define all your exams here. You can add as many as you want.
const EXAM_PROFILES = {
    'SEBI': { 
        name: 'SEBI Grade A', 
        folder: 'tests/sebi',   // GitHub folder path
        marks: 1.25,            // Marks for correct answer
        neg: 0.3125,            // Negative marks (1/4th of 1.25)
        time: [1, 0, 0]         // Timer: [Hours, Minutes, Seconds] -> 60 mins
    },
    
    'NABARD_P1': { 
        name: 'NABARD Phase 1',  
        folder: 'tests/nabard/p1', 
        marks: 1.0,  
        neg: 0.25,   
        time: [2, 0, 0]         // 120 mins
    },
    
    // --- SPECIAL PHASE 2 SETTING ---
    'NABARD_P2': { 
        name: 'NABARD Phase 2 (Obj+Desc)', 
        folder: 'tests/nabard/p2', 
        marks: 1.0,             // Default for objective (can be overridden in JSON)
        neg: 0.25,   
        time: [1, 30, 0],       // 90 Mins standard duration
        hasDescriptive: true    // Custom flag (future-proofing)
    },
    
    'RBI': { 
        name: 'RBI Grade B',  
        folder: 'tests/rbi',    
        marks: 1.0,  
        neg: 0.25,   
        time: [2, 0, 0] 
    },
    
    'SSC': { 
        name: 'SSC CGL',      
        folder: 'tests/ssc',    
        marks: 2.0,  
        neg: 0.50,   
        time: [1, 0, 0] 
    },
    
    'UPSC': { 
        name: 'UPSC CSE',     
        folder: 'tests/upsc',   
        marks: 2.0,  
        neg: 0.66,   
        time: [2, 0, 0]
        shuffle: false  // <--- ADD THIS LINE (Default is true if missing)
    }
};
