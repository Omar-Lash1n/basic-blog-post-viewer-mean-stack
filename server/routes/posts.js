const express = require('express');
const router = express.Router();

// Pre-defined blog posts (static data — no DB persistence required)
const blogPosts = [
  {
    id: 1,
    title: 'The Mysteries of Deep Space Exploration',
    description:
      'Humanity has always looked to the stars with wonder. From the Voyager probes venturing beyond our solar system to the James Webb Telescope capturing images of galaxies formed just after the Big Bang, deep space exploration continues to reshape our understanding of the universe and our place within it.',
    author: 'Sarah Johnson',
    date: '2026-04-10',
  },
  {
    id: 2,
    title: 'The Psychology Behind Daily Habits',
    description:
      'Why do we repeat certain behaviors every day without thinking? Habits are powerful neurological loops consisting of a cue, a routine, and a reward. Understanding this loop can help you break bad habits and build positive ones, transforming your productivity, health, and overall well-being.',
    author: 'Michael Chen',
    date: '2026-04-08',
  },
  {
    id: 3,
    title: 'Mastering the Art of Italian Cooking',
    description:
      'Italian cuisine is far more than just pizza and pasta. It is a celebration of fresh, high-quality ingredients prepared with simplicity and love. From the rich ragùs of Bologna to the delicate seafood dishes of the Amalfi Coast, mastering Italian cooking means learning to let ingredients speak for themselves.',
    author: 'Emily Rodriguez',
    date: '2026-04-05',
  },
  {
    id: 4,
    title: 'A Beginner\'s Guide to Street Photography',
    description:
      'Street photography captures the raw, unscripted moments of everyday life. It requires patience, a keen eye for composition, and the courage to shoot in public spaces. Learn the essential techniques — from understanding light and shadows to finding compelling stories in ordinary scenes.',
    author: 'David Kim',
    date: '2026-04-02',
  },
  {
    id: 5,
    title: 'Smart Personal Finance in Your 20s',
    description:
      'Your twenties are the best time to build a strong financial foundation. Start by creating a budget, building an emergency fund, and understanding compound interest. Small, consistent investments now can grow into significant wealth over time, giving you freedom and security for decades to come.',
    author: 'Jessica Taylor',
    date: '2026-03-28',
  },
  {
    id: 6,
    title: 'How Music Shapes Our Emotions',
    description:
      'Music has a profound effect on the human brain, influencing mood, memory, and even physical health. Studies show that listening to certain melodies can reduce anxiety, boost dopamine levels, and improve focus. From classical symphonies to modern beats, the power of music is truly universal.',
    author: 'Alex Martinez',
    date: '2026-03-25',
  },
];

// @route   GET /api/posts
// @desc    Get all blog posts
router.get('/', (req, res) => {
  res.json(blogPosts);
});

// @route   GET /api/posts/:id
// @desc    Get a single blog post by ID
router.get('/:id', (req, res) => {
  const post = blogPosts.find((p) => p.id === parseInt(req.params.id));
  if (!post) {
    return res.status(404).json({ message: 'Post not found' });
  }
  res.json(post);
});

module.exports = router;
