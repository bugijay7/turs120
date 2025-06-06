import React from 'react';
import { FaPlay, FaHeart } from 'react-icons/fa';
import img1 from '../../assets/leadership/leadpastor.jpeg';
import img2 from '../../assets/blog/2.jpeg';
import img3 from '../../assets/blog/3.jpeg';
import img4 from '../../assets/blog/4.jpeg';
import img5 from '../../assets/blog/5.jpeg';

function BlogList() {
  const blogs = [
    {
      id: 1,
      author: "Pastor Grace M.",
      title: "Sunday Sermon – Faith Over Fear",
      text: "This past Sunday, Pastor Grace reminded us of God’s constant presence during uncertainty. Dive into a powerful message on overcoming fear through unwavering faith in Christ.",
      img: img1,
    },
    {
      id: 2,
      author: "Worship Team",
      title: "Highlight – Spirit-Led Worship Night",
      text: "Last Friday’s worship night was a divine encounter! The room was filled with praise as hearts opened to the Spirit. Relive the moment and experience the atmosphere again.",
      img: img2,
    },
    {
      id: 3,
      author: "Youth Ministry",
      title: "Outreach – Hope in Action",
      text: "Our youth stepped out in faith this week, delivering care packages and praying with families in need. A beautiful reflection of Christ’s love in action. Be inspired by their story.",
      img: img3,
    },
    {
      id: 4,
      author: "Bible Study Team",
      title: "Midweek Word – Deep Dive into Psalms",
      text: "This week’s Bible Study focused on the Psalms of David. Discover how ancient songs of lament and praise can strengthen your personal walk with Christ.",
      img: img4,
    },
    {
      id: 5,
      author: "Testimony Sunday",
      title: "Stories of Transformation",
      text: "Members of the congregation shared powerful testimonies of healing, provision, and restoration. Witness the hand of God moving in our community.",
      img: img5,
    },
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-4">
    <ul className="list bg-base-100 rounded-box shadow-md p-4">
      <li className="pb-2 text-xs opacity-60 tracking-wide uppercase">Recent Reflections & Worship Highlights</li>

      {blogs.map((blog) => (
        <li key={blog.id} className="list-row flex gap-4 items-start border-t py-4">
          <img className="size-10 rounded-box object-cover" src={blog.img} alt={blog.author} />
          <div className="flex flex-col gap-1">
            <div className="font-semibold">{blog.author}</div>
            <div className="text-xs uppercase font-semibold opacity-60">{blog.title}</div>
            <p className="text-xs mt-1">{blog.text}</p>
            <div className="flex gap-2 mt-2">
              <button className="btn btn-square btn-ghost text-xl"><FaPlay /></button>
              <button className="btn btn-square btn-ghost text-xl"><FaHeart /></button>
            </div>
          </div>
        </li>
      ))}
    </ul>
    </div>
  );
}

export default BlogList;
