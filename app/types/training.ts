export interface Training {
  id: string
  title: string
  description: string
  imageUrl: string
  duration: string
  level: "Débutant" | "Intermédiaire" | "Avancé" | "Expert"
  tags: string[]
  price: number
}

