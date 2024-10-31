type SocialMedia = {
    url: string;
}

type Teams = {
    name: string;
    slug: string;
    icon: string;
}

type Member = {
  id: string | number;
  name: string;
  email: string;
  slug: string;
  description: string;
  image: string;
  social_media: SocialMedia[];
  teams: Teams[];
};

export default Member;
