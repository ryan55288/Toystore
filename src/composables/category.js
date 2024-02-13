export function useCategory(type) {
  const route = useRoute()
  const grade8Category = reactive([
    {
      id: 1,
      title: '徽章戰士',
      path: '/Grade8',
      section: '#grade8'
    },
    {
      id: 2,
      title: '百獸戰隊',
      path: '/Grade8',
      section: '#grade8'
    },
    {
      id: 3,
      title: '彈珠超人',
      path: '/Grade8',
      section: '#grade8'
    },
    {
      id: 4,
      title: '戰鬥陀螺',
      path: '/Grade8',
      section: '#grade8'
    },
    {
      id: 5,
      title: '數碼寶貝',
      path: '/Grade8',
      section: '#grade8'
    },
  ])
  const newToyCategory = reactive([
    {
      id: 6,
      title: '鋼彈模型',
      path: '/Newtoy',
      section: '#newToy'
    },
    {
      id: 7,
      title: '模型車',
      path: '/Newtoy',
      section: '#newToy'
    },
    {
      id: 8,
      title: 'LEGO',
      path: '/Newtoy',
      section: '#newToy'
    },
    {
      id: 9,
      title: '漫威',
      path: '/Newtoy',
      section: '#newToy'
    },
    {
      id: 10,
      title: '洛克人',
      path: '/Newtoy',
      section: '#newToy'
    },
  ])
  const oneRewardCategory = reactive([
    {
      id: 11,
      title: '一番賞',
      path: '/OneReward',
      section: '#oneReward'
    }
  ])
  const allCategory = [...grade8Category, ...newToyCategory, ...oneRewardCategory]
  const categoryType = () => {
    switch (type) {
      case 'grade8':
        return grade8Category[0]
      case 'newToy':
        return newToyCategory[0]
    }
  }
  const currentSelectCategory = ref(
    route.query.keyword ? { title: route.query.keyword, id: +route.query.id } : categoryType()
    )

  watch(
    () => route.query,
    () => {
      if (route.query.keyword) {
        currentSelectCategory.value = {
          title: route.query.keyword,
          id: +route.query.id,
        }
      }
    }
  )
  return {
    grade8Category,
    newToyCategory,
    currentSelectCategory,
    allCategory
  }
}