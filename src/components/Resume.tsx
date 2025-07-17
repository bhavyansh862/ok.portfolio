import React from 'react';

const Resume = () => {
  return (
    <div className="p-8 text-white">
      <h1 className="text-3xl font-bold">My Resume</h1>
      <p className="mt-4">Download my resume or view it below.</p>
      <a
        href="/resume.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block px-4 py-2 bg-blue-600 hover:bg-blue-800 text-white rounded"
      >
        View Resume
      </a>
    </div>
  );
};

export default Resume;
