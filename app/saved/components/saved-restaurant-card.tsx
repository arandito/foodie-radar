import { Restaurant } from '@/types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Phone } from "lucide-react"
import Image from 'next/image'
import { cuisineOptionsDict } from '@/lib/constants'
import UnsaveButton from '@/app/saved/components/unsave-button'

interface RestaurantCardProps {
  restaurant: Restaurant;
}

export default function RestaurantCard({ restaurant }: RestaurantCardProps) {
  const getPriceLevelString = (priceLevel: number) => {
    if (priceLevel === 0) return "-"
    return '$'.repeat(priceLevel - 1)
  }

  return (
    <Card className="max-w-[330px] md:max-w-[430px] h-full bg-background/50 dark:bg-background/50 overflow-hidden flex flex-col">
      {restaurant.photo && (
        <div className="relative w-full min-h-48">
          <Image
            src={`https://places.googleapis.com/v1/${restaurant.photo.name}/media?maxHeightPx=${restaurant.photo.heightPx}&maxWidthPx=${restaurant.photo.widthPx}&key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`}
            alt={restaurant.name}
            fill
            style={{ objectFit: 'cover' }} 
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-center font-extrabold text-xl">
          {restaurant.name}
          <div className='flex gap-1'>
            <Badge variant="outline" className={`${cuisineOptionsDict[restaurant.primaryType]?.bgColor} text-xs md:text-sm text-white`}>
              {cuisineOptionsDict[restaurant.primaryType]?.name}
            </Badge>
            <Badge variant="outline" className="flex items-center test-xs md:text-sm">
              {getPriceLevelString(restaurant.priceLevel)}
            </Badge>
            <Badge variant="outline" className="flex items-center test-xs md:text-sm">
              <Star className="w-4 h-4 mr-1" />
              {restaurant.rating}
            </Badge>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-3 flex-grow -mt-2'>
        <div className='font-light'>
          {restaurant.editorialSummary ? restaurant.editorialSummary : <div>No description available for this wonderful place.</div>}
        </div>
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <MapPin className="w-4 h-4 mr-2" />
          {restaurant.address}
        </div>
        {restaurant.phoneNumber &&
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <Phone className="w-4 h-4 mr-2" />
            {restaurant.phoneNumber}
          </div>}
      </CardContent>
      <CardFooter>
        <div className='flex flex-col w-full items-center gap-2'>
          {restaurant.googleMapsUri && (
            <Button variant="secondary" className="w-full" asChild>
              <a href={restaurant.googleMapsUri} target="_blank" rel="noopener noreferrer">
                View in Google Maps
              </a>
            </Button>
          )}
          {restaurant.websiteUri &&
            <Button variant="secondary" className="w-full" asChild>
              <a href={restaurant.websiteUri} target="_blank" rel="noopener noreferrer">
                Visit Their Website
              </a>
            </Button>}
          <UnsaveButton restaurant={restaurant} />
        </div>
      </CardFooter>
    </Card>
  )
}