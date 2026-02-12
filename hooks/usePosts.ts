'use client';

import { useState, useEffect } from 'react';
import { Noticia } from '@/types';

const POSTS_STORAGE_KEY = 'intranet_posts';

export function usePosts() {
    const [posts, setPosts] = useState<Noticia[]>([]);
    const [loading, setLoading] = useState(true);

    // Load posts from localStorage on mount
    useEffect(() => {
        try {
            const stored = localStorage.getItem(POSTS_STORAGE_KEY);
            if (stored) {
                setPosts(JSON.parse(stored));
            }
        } catch (error) {
            console.error('Error loading posts:', error);
        } finally {
            setLoading(false);
        }
    }, []);

    // Save posts to localStorage whenever they change
    const savePosts = (newPosts: Noticia[]) => {
        try {
            localStorage.setItem(POSTS_STORAGE_KEY, JSON.stringify(newPosts));
            setPosts(newPosts);
        } catch (error) {
            console.error('Error saving posts:', error);
            throw error;
        }
    };

    const createPost = (post: Omit<Noticia, 'id'>) => {
        const newPost: Noticia = {
            ...post,
            id: Date.now(), // Simple ID generation
        };
        const updatedPosts = [newPost, ...posts];
        savePosts(updatedPosts);
        return newPost;
    };

    const updatePost = (id: number, updates: Partial<Noticia>) => {
        const updatedPosts = posts.map(post =>
            post.id === id ? { ...post, ...updates } : post
        );
        savePosts(updatedPosts);
    };

    const deletePost = (id: number) => {
        const updatedPosts = posts.filter(post => post.id !== id);
        savePosts(updatedPosts);
    };

    const getPost = (id: number) => {
        return posts.find(post => post.id === id);
    };

    return {
        posts,
        loading,
        createPost,
        updatePost,
        deletePost,
        getPost,
    };
}
