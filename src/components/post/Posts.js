import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroller';

import { getPosts } from '../../store/actions/postAction';
import LoadingCard from '../LoadingCard';
import EmptyContentCard from '../EmptyContentCard';
import PostCard from './PostCard';

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, isLoading } = useSelector((state) => state.postReducer);

  useEffect(() => {
    dispatch(getPosts(1));
  }, [dispatch]);

  const handlePosts = () => {
    if (!isLoading) {
      dispatch(getPosts(posts.nextNumbPage));
    }
  };

  return (
    posts.allIds.length ?
      <InfiniteScroll
        pageStart={0}
        loadMore={handlePosts}
        hasMore={posts.nextNumbPage <= posts.lastPage }
        loader={<div key={0}> <LoadingCard/> </div>}
      >
        { posts.allIds.map((post, index) => <PostCard key={index} post={posts.byId[post]}/>)}
      </InfiniteScroll> :
      <EmptyContentCard/>
  );
};

export default Posts;
