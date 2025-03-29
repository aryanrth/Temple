
import { CommitteeMember } from "@/data/committeeMembers";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Phone, Mail, Info } from "lucide-react";

interface MemberDetailDialogProps {
  member: CommitteeMember | null;
  isOpen: boolean;
  onClose: () => void;
}

const MemberDetailDialog = ({ member, isOpen, onClose }: MemberDetailDialogProps) => {
  if (!member) return null;

  const initials = member.name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center">
            <Avatar className="h-16 w-16 mr-4 border-2 border-temple-gold">
              <AvatarImage src={member.photoUrl} alt={member.name} />
              <AvatarFallback className="bg-temple-saffron text-white">{initials}</AvatarFallback>
            </Avatar>
            <div>
              <DialogTitle className="text-2xl font-bold text-temple-maroon">{member.name}</DialogTitle>
              <DialogDescription className="text-temple-gold font-medium">{member.role}</DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="mt-6">
          <div className="flex items-center gap-2 mb-2">
            <Info size={18} className="text-temple-maroon" />
            <h3 className="font-semibold text-lg">About</h3>
          </div>
          <p className="text-gray-700">{member.description}</p>
        </div>
        
        <Separator className="my-4" />
        
        <div>
          <h3 className="font-semibold text-lg mb-2">Areas of Responsibility</h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {member.responsibilities.map((resp, index) => (
              <li key={index} className="bg-temple-ivory px-3 py-2 rounded-md text-sm">{resp}</li>
            ))}
          </ul>
        </div>
        
        <Separator className="my-4" />
        
        <div>
          <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Phone size={18} className="text-temple-maroon" />
              <span>{member.phoneNumber}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={18} className="text-temple-maroon" />
              <span>{member.email}</span>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MemberDetailDialog;
