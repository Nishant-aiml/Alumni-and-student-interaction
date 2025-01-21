import React, { createContext, useContext, useState, useEffect } from 'react';
import { Post, Comment } from '../types/feed';
import { dummyPosts } from '../data/dummyData';
import { useAuth } from './AuthContext';

interface FeedContextType {
  posts: Post[];
  addPost: (post: Omit<Post, 'id' | 'timestamp' | 'likes' | 'comments'>) => void;
  editPost: (postId: string, content: string, title?: string) => void;
  deletePost: (postId: string) => void;
  likePost: (postId: string) => void;
  unlikePost: (postId: string) => void;
  addComment: (postId: string, content: string) => void;
  editComment: (postId: string, commentId: string, content: string) => void;
  deleteComment: (postId: string, commentId: string) => void;
  setPostEditMode: (postId: string, isEditing: boolean) => void;
  setCommentEditMode: (postId: string, commentId: string, isEditing: boolean) => void;
}

const FeedContext = createContext<FeedContextType | undefined>(undefined);

export const useFeed = () => {
  const context = useContext(FeedContext);
  if (!context) {
    throw new Error('useFeed must be used within a FeedProvider');
  }
  return context;
};

export const FeedProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [posts, setPosts] = useState<Post[]>(() => {
    const savedPosts = localStorage.getItem('posts');
    return savedPosts ? JSON.parse(savedPosts) : dummyPosts;
  });

  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  }, [posts]);

  const addPost = (newPost: Omit<Post, 'id' | 'timestamp' | 'likes' | 'comments'>) => {
    const post: Post = {
      ...newPost,
      id: Date.now().toString(),
      timestamp: Date.now(),
      likes: [],
      comments: [],
    };
    setPosts(prev => [post, ...prev]);
  };

  const editPost = (postId: string, content: string, title?: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId && post.userId === user?.id) {
        return { ...post, content, title: title || post.title, isEditing: false };
      }
      return post;
    }));
  };

  const deletePost = (postId: string) => {
    setPosts(prev => prev.filter(post => 
      !(post.id === postId && post.userId === user?.id)
    ));
  };

  const likePost = (postId: string) => {
    if (!user?.id) return;
    setPosts(prev => prev.map(post => {
      if (post.id === postId && !post.likes.includes(user.id)) {
        return { ...post, likes: [...post.likes, user.id] };
      }
      return post;
    }));
  };

  const unlikePost = (postId: string) => {
    if (!user?.id) return;
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return { ...post, likes: post.likes.filter(id => id !== user.id) };
      }
      return post;
    }));
  };

  const addComment = (postId: string, content: string) => {
    if (!user?.id) return;
    const newComment: Comment = {
      id: Date.now().toString(),
      userId: user.id,
      userName: `${user.firstName} ${user.lastName}`,
      userImage: `https://ui-avatars.com/api/?name=${user.firstName}+${user.lastName}&background=random`,
      content,
      timestamp: Date.now(),
    };

    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return { ...post, comments: [...post.comments, newComment] };
      }
      return post;
    }));
  };

  const editComment = (postId: string, commentId: string, content: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const updatedComments = post.comments.map(comment => {
          if (comment.id === commentId && comment.userId === user?.id) {
            return { ...comment, content, isEditing: false };
          }
          return comment;
        });
        return { ...post, comments: updatedComments };
      }
      return post;
    }));
  };

  const deleteComment = (postId: string, commentId: string) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: post.comments.filter(comment => 
            !(comment.id === commentId && comment.userId === user?.id)
          ),
        };
      }
      return post;
    }));
  };

  const setPostEditMode = (postId: string, isEditing: boolean) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId && post.userId === user?.id) {
        return { ...post, isEditing };
      }
      return post;
    }));
  };

  const setCommentEditMode = (postId: string, commentId: string, isEditing: boolean) => {
    setPosts(prev => prev.map(post => {
      if (post.id === postId) {
        const updatedComments = post.comments.map(comment => {
          if (comment.id === commentId && comment.userId === user?.id) {
            return { ...comment, isEditing };
          }
          return comment;
        });
        return { ...post, comments: updatedComments };
      }
      return post;
    }));
  };

  return (
    <FeedContext.Provider
      value={{
        posts,
        addPost,
        editPost,
        deletePost,
        likePost,
        unlikePost,
        addComment,
        editComment,
        deleteComment,
        setPostEditMode,
        setCommentEditMode,
      }}
    >
      {children}
    </FeedContext.Provider>
  );
};
