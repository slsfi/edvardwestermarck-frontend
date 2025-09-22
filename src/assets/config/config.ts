type Config = { [key: string]: any }

export const config: Config = {
  app: {
    siteURLOrigin: "https://granska-westermarck.sls.fi",
    projectNameDB: "edvardwestermarck",
    projectId: 1,
    backendBaseURL: "https://granska-westermarck-api.sls.fi/digitaledition",
    alternateFacsimileBaseURL: "",
    i18n: {
      languages: [
        { code: "sv", label: "Svenska", region: "FI" },
        { code: "en", label: "English", region: "GB" }
      ],
      defaultLanguage: "sv",
      multilingualCollectionTableOfContents: false,
      multilingualReadingTextLanguages: [],
      multilingualNamedEntityData: false
    },
    enableRouterLoadingBar: true,
    openGraphMetaTags: {
      enabled: true,
      image: {
        sv: {
          altText: "Svartvitt fotografi av en man i kostym och glasögon med handen mot hakan till vänster, mot en blåsvart bakgrund med mosaikmönster. Till höger texten: Edvard Westermarck – Brev, artiklar och fälstudier.",
          URL: "assets/images/open-graph/edvard-westermarck-brev-artiklar-och-faltstudier-1494x782.jpg"
        },
        en: {
          altText: "Black-and-white photograph of a man in a suit and glasses with his hand to his chin on the left, against a blue-black background with a mosaic pattern. On the right, the text: Edvard Westermarck – Letters, articles and field studies.",
          URL: "assets/images/open-graph/edvard-westermarck-letters-articles-and-field-studies-1494x782.jpg"
        }
      }
    },
    prebuild: {
      sitemap: true,
      staticCollectionMenus: true
    },
    ssr: {
      collectionSideMenu: false
    }
  },
  articles: [],
  collections: {
    addTEIClassNames: false,
    replaceImageAssetsPaths: false,
    enableLegacyIDs: false,
    enableMathJax: false,
    firstTextItem: { 1: "1_37", 2: "2_1" },
    frontMatterPages: {
      cover: false,
      title: false,
      foreword: false,
      introduction: false
    },
    frontMatterPageDisabled: {
      cover: [],
      title: [],
      foreword: [],
      introduction: []
    },
    highlightSearchMatches: true,
    inlineIllustrations: [],
    mediaCollectionMappings: {},
    order: [
      [1],
      [2]
    ]
  },
  ebooks: [],
  page: {
    about: {
      initialPageNode: "01"
    },
    article: {
      showTextDownloadButton: false,
      showURNButton: false
    },
    elasticSearch: {
      enableFilters: true,
      enableSortOptions: true,
      filterGroupsOpenByDefault: ["Years", "Type", "Genre", "Collection"],
      hitsPerPage: 15,
      indices: ["edvardwestermarck"],
      openReadingTextWithComments: false,
      textHighlightFragmentSize: 150,
      textHighlightType: "fvh",
      textTitleHighlightType: "fvh",
      typeFilterGroupOptions: ["est", "ms"],
      fixedFilters: [
        {
          terms: {
            deleted: ["0"]
          }
        },
        {
          terms: {
            published: ["2"]
          }
        }
      ],
      additionalSourceFields: [],
      aggregations: {
        Years: {
          date_histogram: {
            field: "orig_date_sort",
            calendar_interval: "year",
            format: "yyyy"
          }
        },
        Type: {
          terms: {
            field: "text_type",
            size: 40,
            order: {_key: "asc"}
          }
        },
        Genre: {
          terms: {
            field: "publication_data.genre.keyword",
            size: 40,
            order: {_key: "asc"}
          }
        },
        Collection: {
          terms: {
            field: "publication_data.collection_name.keyword",
            size: 40,
            order: {_key: "asc"}
          }
        },
        LetterSenderName: {
          terms: {
            field: "sender_subject_name.keyword",
            size: 100
          }
        },
        LetterReceiverName: {
          terms: {
            field: "receiver_subject_name.keyword",
            size: 100
          }
        },
        LetterSenderLocation: {
          terms: {
            field: "sender_location_name.keyword",
            size: 50
          }
        },
        LetterReceiverLocation: {
          terms: {
            field: "receiver_location_name.keyword",
            size: 50
          }
        }
      }
    },
    foreword: {
      showURNButton: true,
      showViewOptionsButton: true
    },
    home: {
      bannerImage: {
        altTexts: {
          sv: "Svartvitt fotografi av en man i kostym och glasögon med handen mot hakan till vänster, mot en blåsvart bakgrund med mosaikmönster.",
          en: "Black-and-white photograph of a man in a suit and glasses with his hand to his chin on the left, against a blue-black background with a mosaic pattern."
        },
        intrinsicSize: {
          height: 677,
          width: 1920
        },
        orientationPortrait: false,
        alternateSources: [
          {
            media: "(max-width: 559px)",
            srcset: "assets/images/edvard-westermarck-1344x474.avif 1344w",
            type: "image/avif"
          },
          {
            media: "(max-width: 559px)",
            srcset: "assets/images/edvard-westermarck-1344x474.jpg 1344w",
            type: "image/jpeg"
          },
          {
            media: "(max-width: 810px)",
            srcset: "assets/images/edvard-westermarck-1344x474-alternate.avif 1344w",
            type: "image/avif"
          },
          {
            media: "(max-width: 810px)",
            srcset: "assets/images/edvard-westermarck-1344x474-alternate.jpg 1344w",
            type: "image/jpeg"
          },
          {
            media: "(max-width: 1100px)",
            srcset: "assets/images/edvard-westermarck-1344x474.avif 1344w",
            type: "image/avif"
          },
          {
            media: "(max-width: 1100px)",
            srcset: "assets/images/edvard-westermarck-1344x474.jpg 1344w",
            type: "image/jpeg"
          },
          {
            srcset: "assets/images/edvard-westermarck-1920x677.avif 1920w",
            type: "image/avif"
          },
          {
            srcset: "assets/images/edvard-westermarck-1920x677.jpg 1920w",
            type: "image/jpeg"
          }
        ],
        URL: "assets/images/edvard-westermarck-1920x677.jpg"
      },
      portraitOrientationSettings: {
        imagePlacement: {
          onRight: false,
          squareCroppedVerticalOffset: "10%"
        },
        siteTitleOnImageOnSmallScreens: false
      },
      showContentGrid: false,
      showFooter: true,
      showSearchbar: false
    },
    index: {
      keywords: {
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      persons: {
        database: "elastic",
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      places: {
        maxFetchSize: 500,
        showFilter: true,
        publishedStatus: 2
      },
      works: {
        publishedStatus: 2
      }
    },
    introduction: {
      hasSeparateTOC: true,
      showTextDownloadButton: true,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        personInfo: true,
        placeInfo: false,
        workInfo: true,
        paragraphNumbering: true,
        pageBreakEdition: true
      }
    },
    mediaCollection: {
      showURNButton: true
    },
    text: {
      defaultViews: ["readingtext", "facsimiles"],
      defaultViewOptions: [],
      showTextDownloadButton: true,
      showURNButton: true,
      showViewOptionsButton: true,
      viewOptions: {
        comments: false,
        personInfo: false,
        placeInfo: false,
        emendations: true,
        normalisations: true,
        workInfo: false,
        abbreviations: true,
        paragraphNumbering: true,
        pageBreakOriginal: true,
        pageBreakEdition: false
      },
      variantViewOptions: {
        showVariationTypeOption: false,
        defaultVariationType: "all"
      },
      viewTypes: {
        showAll: true,
        readingtext: true,
        comments: false,
        facsimiles: true,
        manuscripts: true,
        variants: false,
        illustrations: false,
        legend: true,
        metadata: false
      },
      viewTypeDisabledCollections: {
        readingtext: [],
        comments: [],
        facsimiles: [],
        manuscripts: [],
        variants: [],
        illustrations: [],
        legend: [],
        metadata: []
      }
    },
    title: {
      loadContentFromMarkdown: false,
      showURNButton: true,
      showViewOptionsButton: true
    }
  },
  component: {
    collectionSideMenu: {
      sortableCollectionsAlphabetical: [],
      sortableCollectionsChronological: [],
      sortableCollectionsCategorical: [],
      categoricalSortingPrimaryKey: "",
      categoricalSortingSecondaryKey: ""
    },
    contentGrid: {
      includeArticles: false,
      includeEbooks: false,
      includeMediaCollection: false,
      mediaCollectionCoverURL: "",
      mediaCollectionCoverAltTexts: {
        sv: "Alt-text",
        en: "Alt text"
      },
      showTitles: true
    },
    facsimiles: {
      imageQuality: 4,
      showTitle: true
    },
    mainSideMenu: {
      items: {
        about: true,
        articles: false,
        ebooks: false,
        collections: true,
        mediaCollections: false,
        indexKeywords: false,
        indexPersons: false,
        indexPlaces: false,
        indexWorks: false,
        search: true
      },
      defaultExpanded: false,
      ungroupArticles: false
    },
    manuscripts: {
      showTitle: false,
      showNormalizedToggle: true,
      showOpenLegendButton: true
    },
    topMenu: {
      showAboutButton: true,
      showContentButton: true,
      showElasticSearchButton: true,
      showLanguageButton: true
    },
    variants: {
      showOpenLegendButton: true
    }
  },
  modal: {
    downloadTexts: {
      introductionFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      readingTextFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      commentsFormats: {
        xml: true,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      },
      manuscriptsFormats: {
        xml: false,
        html: false,
        xhtml: false,
        txt: false,
        print: true
      }
    },
    fullscreenImageViewer: {
      imageQuality: 4
    },
    referenceData: {
      URNResolverURL: "https://urn.fi/",
    },
    namedEntity: {
      showAliasAndPrevLastName: false,
      showArticleData: false,
      showCityRegionCountry: false,
      showDescriptionLabel: false,
      showGalleryOccurrences: false,
      showMediaData: false,
      showOccupation: false,
      showOccurrences: true,
      showType: false,
      useSimpleWorkMetadata: true
    }
  }
}
