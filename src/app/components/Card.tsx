import Image from "next/image"

import { cn } from "@/lib/utils"

interface CardProps {
  width?: number
  height?: number
  image: string
  title: string
  subtitle: string
}

export function Card({ width, height, className, image, title, subtitle, ...props }: CardProps) {
  return (
    <div className={cn("space-y-3", className)} {...props}>
      <div className="overflow-hidden rounded-md">
        <Image
          src={image}
          alt={title}
          width={width}
          height={height}
          className={cn(
            "object-cover transition-all hover:scale-105"
          )}
        />
      </div>
      <div className="space-y-1 text-sm">
        <h3 className="font-medium leading-none">{title}</h3>
        <p className="text-xs text-muted-foreground truncate">{subtitle}</p>
      </div>
    </div>
  )
}
