export type UserType = {
  id: string;
  name: string;
  image?: string;
  username: string;
};

export type TweetTypes = {
  id: string;
  createdAt: string;
  image?: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  impressions?: number;
  user: UserType;
  content: string;
};
