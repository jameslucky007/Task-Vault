"use client";

import React, { useState } from 'react';

type Note =
  | { id: number; title: string; type: 'text'; content: string }
  | { id: number; title: string; type: 'todo'; content: string[] };

const NotesPage = () => {
  const [notes, setNotes] = useState<Note[]>([
    { id: 1, title: 'Project Ideas', content: 'Explore new UI/UX paradigms for the mobile app.', type: 'text' },
    { id: 2, title: 'Weekly Tasks', content: ['Review PRs', 'Design system update', 'Client call'], type: 'todo' },
  ]);
  
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [isTodoMode, setIsTodoMode] = useState(false);
  const [isRecording, setIsRecording] = useState(false);

  // Filter notes based on search query
  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    (note.type === 'text' && note.content.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleSaveNote = () => {
    if (!newTitle.trim() && !newContent.trim()) {
      setIsCreating(false);
      return;
    }

    const newNote: Note = isTodoMode
      ? {
          id: Date.now(),
          title: newTitle,
          type: 'todo',
          content: newContent.split('\n').filter(i => i.trim() !== ''),
        }
      : {
          id: Date.now(),
          title: newTitle,
          type: 'text',
          content: newContent,
        };

    setNotes([newNote, ...notes]);
    setNewTitle('');
    setNewContent('');
    setIsCreating(false);
    setIsTodoMode(false);
  };

  const deleteNote = (id: number) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 font-sans text-gray-900">
      
      {/* Top Bar: Title & Search */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Notes</h1>
        <div className="relative w-full md:w-96">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-full leading-5 bg-gray-50 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-black focus:ring-1 focus:ring-black sm:text-sm transition-colors"
            placeholder="Search your notes..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Note Creator (Google Keep Style) */}
      <div className="max-w-2xl mx-auto mb-12 relative">
        <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden transition-all duration-200 focus-within:shadow-md">
          {isCreating && (
            <input
              type="text"
              placeholder="Title"
              className="w-full p-4 pb-2 text-lg font-semibold focus:outline-none"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              autoFocus
            />
          )}
          
          <textarea
            placeholder="Take a note..."
            className="w-full p-4 text-gray-700 focus:outline-none resize-none"
            rows={isCreating ? 3 : 1}
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
            onClick={() => setIsCreating(true)}
          />

          {isCreating && (
            <div className="flex items-center justify-between p-3 border-t border-gray-100 bg-gray-50">
              <div className="flex space-x-2">
                {/* Todo Toggle */}
                <button 
                  onClick={() => setIsTodoMode(!isTodoMode)}
                  className={`p-2 rounded-full hover:bg-gray-200 transition-colors ${isTodoMode ? 'text-black bg-gray-200' : 'text-gray-500'}`}
                  title="List View"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>
                </button>
                {/* Voice Record Mock Button */}
                <button 
                  onClick={() => setIsRecording(!isRecording)}
                  className={`p-2 rounded-full hover:bg-red-50 transition-colors ${isRecording ? 'text-red-500 animate-pulse' : 'text-gray-500'}`}
                  title="Record Audio"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                </button>
              </div>
              <button 
                onClick={handleSaveNote}
                className="px-6 py-2 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-colors"
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredNotes.map((note) => (
          <div key={note.id} className="group bg-white border border-gray-200 rounded-2xl p-5 hover:shadow-md transition-shadow relative flex flex-col min-h-[150px]">
            {note.title && <h3 className="font-bold text-lg mb-2 text-gray-900">{note.title}</h3>}
            
            <div className="text-gray-600 flex-grow">
              {note.type === 'text' ? (
                <p className="whitespace-pre-wrap">{note.content}</p>
              ) : (
                <ul className="space-y-2">
                  {Array.isArray(note.content) && note.content.map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-4 h-4 mt-1 border border-gray-300 rounded-sm mr-2 flex-shrink-0"></div>
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Delete Button (Appears on Hover) */}
            <button 
              onClick={() => deleteNote(note.id)}
              className="absolute bottom-4 right-4 p-2 text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
            </button>
          </div>
        ))}
      </div>
      
      {filteredNotes.length === 0 && (
        <div className="text-center text-gray-500 mt-12">
          No notes found. Create one above!
        </div>
      )}
    </div>
  );
};

export default NotesPage;