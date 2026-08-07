import MentorsBanner from "@/components/mentors/MentorsBanner";
import MentorsCategories from "@/components/mentors/MentorsCategories";
import MentorsList from "@/components/mentors/MentorsList";
import MentorsFeatures from "@/components/mentors/MentorsFeatures";

export default function MentorsPage() {
  return (
    <>
      {/* HERO */}
      <MentorsBanner />

      {/* CATEGORIES */}
      <MentorsCategories />

      {/* TOP MENTORS */}
      <MentorsList />

      {/* FEATURES */}
      <MentorsFeatures />
    </>
  );
}