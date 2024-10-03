import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { toast } from 'sonner';
import { putSavedRestaurant, deleteSavedRestaurant } from '@/lib/api';
import { Restaurant } from '@/types';

interface SaveButtonProps {
  restaurant: Restaurant;
}

export default function UnsaveButton({ restaurant }: SaveButtonProps) {
  const [isSaved, setIsSaved] = useState(true);

  const handleSave = async () => {
    try {
      await putSavedRestaurant(restaurant);
      setIsSaved(true);
      toast('Restaurant saved!', {
        description: 'This restaurant has been added to your saved list.',
        action: {
          label: 'Undo',
          onClick: () => handleUnsave(),
        },
      });
    } catch (error) {
      console.error('Error saving restaurant:', error);
      toast.error('Failed to save restaurant');
    }
  };

  const handleUnsave = async () => {
    try {
      await deleteSavedRestaurant(restaurant.id);
      setIsSaved(false);
      toast('Restaurant removed from saved list');
    } catch (error) {
      console.error('Error removing restaurant:', error);
      toast.error('Failed to remove restaurant from saved list');
    }
  };

  return (
    <Button 
      variant={isSaved ? "secondary" : "default"} 
      className="w-full" 
      onClick={isSaved ? handleUnsave : handleSave}
    >
      {isSaved ? 'Unsave' : 'Save'}
    </Button>
  );
}