import { Restaurant } from '@/types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star, MapPin, Phone } from "lucide-react"
import Image from 'next/image'
import { cuisineOptionsDict } from '@/lib/constants'
import SaveButton from '@/components/save-button'

interface RestaurantCardProps {
  restaurant: Restaurant;
  token: string | null;
}

export default function RestaurantCard({ restaurant, token }: RestaurantCardProps) {
  const getPriceLevelString = (priceLevel: number) => {
    if (priceLevel === 0 || priceLevel == 1) return "-"
    return '$'.repeat(priceLevel - 1)
  }

  return (
    <Card className="max-w-[330px] md:max-w-[430px] h-full bg-background/50 dark:bg-background/50 overflow-hidden flex flex-col">
      {restaurant.photo && (
        <div className="relative w-full pt-[56.25%]">
          <Image
            src={`/api/restaurant-image?photoReference=${restaurant.photo.name}&maxHeightPx=${restaurant.photo.heightPx}&maxWidthPx=${restaurant.photo.widthPx}`}
            alt={restaurant.name}
            fill
            sizes="(max-width: 330px) 330px, (max-width: 430px) 430px, 430px"
            style={{ objectFit: 'cover' }}
            priority
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="flex flex-row justify-between items-center font-extrabold text-xl">
          {restaurant.name}
          <div className='flex ml-4 gap-1'>
            <Badge variant="custom" className={`${cuisineOptionsDict[restaurant.primaryType].bgColor} text-xs md:text-sm text-white`}>
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
            <Button variant={token ? "secondary":"default"} className="w-full" asChild>
              <a href={restaurant.websiteUri} target="_blank" rel="noopener noreferrer">
                Visit Their Website
              </a>
            </Button>}
          {token &&
            <SaveButton restaurant={restaurant} />
          }
        </div>
      </CardFooter>
    </Card>
  )
}