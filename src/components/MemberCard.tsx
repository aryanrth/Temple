
import { CommitteeMember } from "@/data/committeeMembers";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";

interface MemberCardProps {
  member: CommitteeMember;
  onClick: () => void;
  className?: string;
}

const MemberCard = ({ member, onClick, className }: MemberCardProps) => {
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer group",
        className
      )}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden relative">
        <img 
          src={member.photoUrl} 
          alt={member.name}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <span className="text-white text-sm font-medium">View Details</span>
        </div>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg text-temple-maroon">{member.name}</h3>
        <p className="text-temple-gold font-medium">{member.role}</p>
        <div className="mt-2">
          <p className="text-sm text-muted-foreground">Responsible for:</p>
          <ul className="list-disc list-inside text-sm mt-1">
            {member.responsibilities.slice(0, 2).map((resp, index) => (
              <li key={index} className="text-sm text-gray-600">{resp}</li>
            ))}
            {member.responsibilities.length > 2 && (
              <li className="text-sm text-gray-600">+ {member.responsibilities.length - 2} more</li>
            )}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default MemberCard;
