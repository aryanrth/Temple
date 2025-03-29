
import { useState } from "react";
import { committeeMembers } from "@/data/committeeMembers";
import MemberCard from "@/components/MemberCard";
import MemberDetailDialog from "@/components/MemberDetailDialog";
import { useToast } from "@/components/ui/use-toast";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

const Teams = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleMemberClick = (memberId: number) => {
    const member = committeeMembers.find(m => m.id === memberId);
    setSelectedMember(member);
    setDialogOpen(true);
    
    // Optional toast notification
    toast({
      title: "Viewing member details",
      description: `You are now viewing ${member?.name}'s profile.`,
      duration: 3000,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-temple-ivory to-white">
      {/* Navigation Header */}
      <SiteHeader />
      
      {/* Hero Section */}
      <div className="bg-temple-maroon text-white py-12 px-4 md:py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Temple Committee Team</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-temple-ivory/90">
            Meet the dedicated individuals who serve our temple community with devotion and commitment.
          </p>
        </div>
      </div>
      
      {/* Committee Members Grid */}
      <div className="container mx-auto py-12 px-4">
        <div className="mb-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-temple-maroon mb-2">
            Temple Committe Team
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Click on a member's profile to learn more about their role, responsibilities, and contact information.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {committeeMembers.map((member) => (
            <MemberCard 
              key={member.id}
              member={member}
              onClick={() => handleMemberClick(member.id)}
            />
          ))}
        </div>
      </div>
      
      {/* Footer */}
      <SiteFooter />
      
      {/* Member Detail Dialog */}
      <MemberDetailDialog 
        member={selectedMember}
        isOpen={dialogOpen}
        onClose={() => setDialogOpen(false)}
      />
    </div>
  );
};

export default Teams;
