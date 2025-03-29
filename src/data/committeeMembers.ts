
export interface CommitteeMember {
  id: number;
  name: string;
  role: string;
  responsibilities: string[];
  photoUrl: string;
  description: string;
  phoneNumber: string;
  email: string;
}

export const committeeMembers: CommitteeMember[] = [
  {
    id: 1,
    name: "Mr.Arun Rathore",
    role: "President",
    responsibilities: ["Temple Administration", "Community Outreach", "Financial Oversight"],
    photoUrl: "/images/img5.jpg",
    description: "Rajesh has been serving our temple for over 15 years and leads with dedication and compassion. His vision has helped our temple grow into a vibrant community center.",
    phoneNumber: "+91 8200604514",
    email: "rajesh.sharma@example.com"
  },
  {
    id: 2,
    name: "Mr.Birendra Rathore",
    role: "Secretary",
    responsibilities: ["Event Coordination", "Communication", "Record Keeping"],
    photoUrl: "/images/img6.jpg",
    description: "Priya ensures smooth operation of all temple activities and maintains detailed records. Her organizational skills are invaluable to our community.",
    phoneNumber: "+91 9897164510",
    email: "priya.patel@example.com"
  },
  {
    id: 3,
    name: "Mrs.Mamta Rathorw",
    role: "Treasurer",
    responsibilities: ["Financial Management", "Donation Processing", "Budget Planning"],
    photoUrl: "/images/img7.jpg",
    description: "Vikram manages the temple finances with transparency and integrity. He has implemented efficient systems for tracking donations and expenses.",
    phoneNumber: "+91 7434810051",
    email: "vikram.singh@example.com"
  },
  {
    id: 4,
    name: "Mr.Shalindra Rathore",
    role: "Cultural Director",
    responsibilities: ["Festival Planning", "Cultural Programs", "Youth Engagement"],
    photoUrl: "/images/img8.jpg",
    description: "Ananya leads our cultural initiatives with passion and creativity. She has revitalized our festival celebrations and established several new cultural programs.",
    phoneNumber: "+91 8225852040",
    email: "ananya.desai@example.com"
  },
  {
    id: 5,
    name: "Mrs.Sakshi Rathore",
    role: "Maintenance Director",
    responsibilities: ["Building Maintenance", "Grounds Keeping", "Renovation Projects"],
    photoUrl: "/images/img9.jpg",
    description: "Suresh ensures our temple premises are beautiful and well-maintained. His dedication keeps our sacred space clean, functional, and welcoming for all visitors.",
    phoneNumber: "+91 9368556020",
    email: "suresh.kumar@example.com"
  },
  {
    id: 6,
    name: "Mr.Umed Singh Rathore",
    role: "Consultant",
    responsibilities: ["Religious Classes", "Scripture Study", "Library Management"],
    photoUrl: "/images/img12.jpg",
    description: "Deepa organizes our educational programs with wisdom and care. She has expanded our classes to include all age groups and introduced innovative teaching methods.",
    phoneNumber: "+91 9998709058",
    email: "deepa.agarwal@example.com"
  },
  {
    id: 7,
    name: "Mrs.Shaline Rathore",
    role: "Community Service Director",
    responsibilities: ["Charity Programs", "Food Distribution", "Senior Support"],
    photoUrl: "/images/img11.jpg",
    description: "Mohan leads our community service initiatives with compassion and dedication. He has established numerous outreach programs that have touched thousands of lives.",
    phoneNumber: "+91 7973615502",
    email: "mohan.verma@example.com"
  },
  {
    id: 8,
    name: "Mr.Ravindra Rathore",
    role: "Decoration Head",
    responsibilities: ["Ritual Management", "Priest Scheduling", "Special Ceremonies"],
    photoUrl: "/images/img14.jpg",
    description: "Lakshmi coordinates all religious ceremonies with knowledge and respect for tradition. Her expertise ensures that rituals are conducted properly and meaningfully.",
    phoneNumber: "+91 8837544826",
    email: "lakshmi.rao@example.com"
  },
  {
    id: 3,
    name: "Mr.Prashant Rathore",
    role: "Coordinator",
    responsibilities: ["Financial Management", "Donation Processing", "Budget Planning"],
    photoUrl: "/images/img21.jpg",
    description: "Vikram manages the temple finances with transparency and integrity. He has implemented efficient systems for tracking donations and expenses.",
    phoneNumber: "+91 7906414507",
    email: "vikram.singh@example.com"
  },
];
