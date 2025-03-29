
export interface CoreTeam {
  id: number;
  name: string;
  role: string;
  responsibilities: string[];
  photoUrl: string;
  description: string;
  phoneNumber: string;
 
}

export const coreteam: CoreTeam[] = [
  {
    id: 1,
    name: "Mr.Aryan Kumar Rathore",
    role: "Overall view",
    responsibilities: ["Temple Administration", "Community Outreach", "Financial Oversight"],
    photoUrl: "/images/img16.jpg",
    description: "Rajesh has been serving our temple for over 15 years and leads with dedication and compassion. His vision has helped our temple grow into a vibrant community center.",
    phoneNumber: "+91 7906061075",
    // email: "rajesh.sharma@example.com"
  },
  {
    id: 2,
    name: "Mr.Sumit Rathore",
    role: "Working Member",
    responsibilities: ["Event Coordination", "Communication", "Record Keeping"],
    photoUrl: "/images/img18.jpg",
    description: "Priya ensures smooth operation of all temple activities and maintains detailed records. Her organizational skills are invaluable to our community.",
    phoneNumber: "+91 9897164510",
    // email: "priya.patel@example.com"
  },
  {
    id: 3,
    name: "Mr.Ayush Rathore",
    role: "Working Meamber",
    responsibilities: ["Financial Management", "Donation Processing", "Budget Planning"],
    photoUrl: "/images/img20.jpg",
    description: "Vikram manages the temple finances with transparency and integrity. He has implemented efficient systems for tracking donations and expenses.",
    phoneNumber: "+91 7434810051",
    // email: "vikram.singh@example.com"
  },
  {
    id: 4,
    name: "Mr.Meet Rathore",
    role: "Working Member",
    responsibilities: ["Festival Planning", "Cultural Programs", "Youth Engagement"],
    photoUrl: "/images/img27.jpg",
    description: "Ananya leads our cultural initiatives with passion and creativity. She has revitalized our festival celebrations and established several new cultural programs.",
    phoneNumber: "+91 8225852040",
    // email: "ananya.desai@example.com"
  },
  {
    id: 5,
    name: "Mrs.Vishakha Rathore",
    role: "Cleaning Head",
    responsibilities: ["Building Maintenance", "Grounds Keeping", "Renovation Projects"],
    photoUrl: "/images/img26.jpg",
    description: "Suresh ensures our temple premises are beautiful and well-maintained. His dedication keeps our sacred space clean, functional, and welcoming for all visitors.",
    phoneNumber: "+91 9557547541",
    // email: "suresh.kumar@example.com"
  },
  {
    id: 6,
    name: "Mr.Keerti Rathore",
    role: "Cleaning member",
    responsibilities: ["Religious Classes", "Scripture Study", "Library Management"],
    photoUrl: "/images/img22.jpg",
    description: "Deepa organizes our educational programs with wisdom and care. She has expanded our classes to include all age groups and introduced innovative teaching methods.",
    phoneNumber: "+91 9368427353",
    // email: "deepa.agarwal@example.com"
  },
  {
    id: 7,
    name: "Mrs.Puja Rathore",
    role: "Cleaning Member",
    responsibilities: ["Charity Programs", "Food Distribution", "Senior Support"],
    photoUrl: "/images/img23.jpg",
    description: "Mohan leads our community service initiatives with compassion and dedication. He has established numerous outreach programs that have touched thousands of lives.",
    phoneNumber: "+91 7054272780",
    // email: "mohan.verma@example.com"
  },
  {
    id: 8,
    name: "Mrs.Sushma Rathore",
    role: "Cleaning Member",
    responsibilities: ["Ritual Management", "Priest Scheduling", "Special Ceremonies"],
    photoUrl: "/images/img25.jpg",
    description: "Lakshmi coordinates all religious ceremonies with knowledge and respect for tradition. Her expertise ensures that rituals are conducted properly and meaningfully.",
    phoneNumber: "+91 7302506946",
    // email: "lakshmi.rao@example.com"
  }
];
